import * as admin from 'firebase-admin'
import { User } from './model'

const db = admin.database()
const eventUserRef = db.ref('event_users')

export const retrieveUserByEmail = async (eventId: string, email: string): Promise<User> => {
  const snap = await eventUserRef.child(eventId).orderByChild('email').equalTo(email).once('value')

  return snap.val() ?? undefined
}

export const retrieveUserByWalletAddr = async (eventId: string, walletAddr: string): Promise<User> => {
  const snap = await eventUserRef.child(eventId).orderByChild('wallet_address').equalTo(walletAddr).once('value')

  return snap.val() ?? undefined
}

export const writeUser = async (user: User) => {
  await eventUserRef.child(`${user.event_id}`).push(user)
}
