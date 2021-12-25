import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import { ExceptionType, ResponseStatus, User } from './model'

admin.initializeApp()

export const requestAirdrop = functions
  .runWith({
    timeoutSeconds: 60 * 9,
  })
  .https.onRequest(async (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')
    response.set('Access-Control-Allow-Credentials', 'true') // vital

    if (request.method === 'OPTIONS') {
      // Send response to OPTIONS requests
      response.set('Access-Control-Allow-Methods', '*')
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

    functions.logger.info(request.body)

    if (!email || !walletAddress || typeof eventId !== 'string') {
      response.json({ staus: 'error', exception: { type: 'invalid-params', message: 'Invalid params' } })
      return
    }

    const [userSearchByEmail, userSearchByWallet] = await Promise.all([
      retrieveUserByEmail(eventId, email),
      retrieveUserByWalletAddr(eventId, walletAddress),
    ])

    if (userSearchByEmail || userSearchByWallet) {
      response.json({ staus: ResponseStatus.ERROR, exception: { type: ExceptionType.ALREADY_JOINED } })
      return
    }

    const referrerUser = referralEmail ? await retrieveUserByEmail(eventId, referralEmail) : null
    const validReferrer = referrerUser && referrerUser.wallet_address

    functions.logger.info({
      referralEmail,
      referrerUser,
      validReferrer,
    })

    const user: User = {
      event_id: eventId,
      email: email,
      wallet_address: walletAddress,
      referral_email: validReferrer ? referralEmail : null,
    }

    await writeUser(user)

    response.json({ status: ResponseStatus.SUCCESS })
  })
