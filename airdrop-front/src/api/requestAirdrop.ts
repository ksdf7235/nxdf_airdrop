const REQUEST_AIRDROP_URL = 'https://us-central1-eminent-glider-213307.cloudfunctions.net/requestAirdrop'
// const REQUEST_AIRDROP_URL = 'http://localhost:5001/eminent-glider-213307/us-central1/requestAirdrop'

export const requestAirdrop = async (userId: string, walletAddr: string, referral?: string) => {
  const params = {
    email: userId,
    event_id: '0',
    wallet_address: walletAddr,
    referral_email: referral,
  }

  const resp = await fetch(REQUEST_AIRDROP_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params), // body data type must match "Content-Type" header
  })

  const result = await resp.json()

  console.log('requestAirdrop result', result)

  return result
}
