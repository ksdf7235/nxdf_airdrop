import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import { retrieveUserByWalletAddr } from './db'
import { User } from './model'

admin.initializeApp()

export const requestAirdrop = functions.https.onRequest(async (request, response) => {
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

  const { retrieveUserByEmail, writeUser } = await import('./db')

  const email = request.body?.['email']
  const eventId = request.body?.['event_id']
  const referralEmail = request.body?.['referral_email']
  const walletAddress = request.body?.['wallet_address']

  if (!email || !walletAddress || typeof eventId !== 'string') {
    response.json({ staus: 'error', exception: { type: 'invalid-params', message: 'Invalid params' } })
  }

  const [userSearchByEmail, userSearchByWallet] = await Promise.all([
    retrieveUserByEmail(eventId, email),
    retrieveUserByWalletAddr(eventId, walletAddress),
  ])

  if (userSearchByEmail || userSearchByWallet) {
    response.json({ staus: 'error', exception: { type: 'already-joined' } })
  }

  // Call airdrop Api

  const reusultSuccess = true

  if (reusultSuccess) {
    const user: User = {
      event_id: eventId,
      email: email,
      wallet_address: walletAddress,
      referral_email: referralEmail ?? null,
    }

    await writeUser(user)
  } else {
    response.json({ staus: 'error', exception: { type: '' } })
  }

  response.json({ status: 'done' })
})
