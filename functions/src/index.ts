import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import { fetchWalletBalance, sendNxdf, sendSolana } from './api/dWallet'
import { User } from './model'

admin.initializeApp()

const MIN_AMOUNT = 0.0003
const REWARD_AMOUNT = 5000
const REFERRER_REWARD_AMOUNT = 5000

export const requestAirdrop = functions
  .runWith({
    timeoutSeconds: 60 * 9,
  })
  .https.onRequest(async (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')
    response.set('Access-Control-Allow-Credentials', 'true') // vital

    if (request.method === 'OPTIONS') {
      // Send response to OPTIONS requests
      response.set('Access-Control-Allow-Methods', 'GET')
      response.set('Access-Control-Allow-Headers', '*')
      response.set('Access-Control-Max-Age', '3600')
      response.status(204).send('')
      return
    }

    const { retrieveUserByEmail, writeUser, retrieveUserByWalletAddr } = await import('./db')

    const email = request.body?.['email']
    const eventId = request.body?.['event_id']
    const referralEmail = request.body?.['referral_email']
    const walletAddress = request.body?.['wallet_address']

    if (!email || !walletAddress || typeof eventId !== 'string') {
      response.json({ staus: 'error', exception: { type: 'invalid-params', message: 'Invalid params' } })
      return
    }

    const [userSearchByEmail, userSearchByWallet] = await Promise.all([
      retrieveUserByEmail(eventId, email),
      retrieveUserByWalletAddr(eventId, walletAddress),
    ])

    if (userSearchByEmail || userSearchByWallet) {
      response.json({ staus: 'error', exception: { type: 'already-joined' } })
      return
    }

    const referrerUser = referralEmail ? await retrieveUserByEmail(eventId, referralEmail) : null
    const validReferrer = referrerUser && referrerUser.wallet_address

    // Call airdrop Api

    const reusultSuccess = await sendNxdfToken(
      walletAddress,
      validReferrer ? REWARD_AMOUNT + REFERRER_REWARD_AMOUNT : REWARD_AMOUNT
    )

    if (referrerUser && referrerUser.wallet_address) {
      await sendNxdfToken(referrerUser.wallet_address, REFERRER_REWARD_AMOUNT)
    }

    if (reusultSuccess) {
      const user: User = {
        event_id: eventId,
        email: email,
        wallet_address: walletAddress,
        referral_email: validReferrer ? referralEmail : null,
      }

      await writeUser(user)
    } else {
      response.json({ staus: 'error', exception: { type: 'failed' } })
    }

    response.json({ status: 'done' })
  })

const sendNxdfToken = async (walletAddress: string, amount: number) => {
  const resp = await fetchWalletBalance(walletAddress)
  console.log({ fetchWalletBalance: resp.data.data })

  const solBalance = resp?.data?.data?.balance ?? 0

  if (MIN_AMOUNT > solBalance) {
    await sendSolana(walletAddress, MIN_AMOUNT.toString())
  }

  const respSendNxdf = await sendNxdf(walletAddress, amount)
  console.log({ respSendNxdfs: respSendNxdf.status, respSendNxdfd: respSendNxdf.data })
  return respSendNxdf.status === 200
}
