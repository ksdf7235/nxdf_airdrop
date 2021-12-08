import axios from 'axios'

export const fetchWalletBalance = async (walletAddress: string) => {
  return axios.get(`https://d-wallet-api-dev.daios.net/v1/sol/balance?network=mainnet-beta&address=${walletAddress}`)
}

export const sendSolana = async (walletAddress: string, amount: string) => {
  return axios.post(
    `https://d-wallet-api-dev.daios.net/v1/sol/send`,
    {
      network: 'mainnet-beta',
      privateKey:
        '142,3,91,218,122,81,98,254,220,31,39,228,91,32,14,175,10,183,65,179,188,172,150,117,87,173,64,236,49,83,169,167,132,5,105,190,228,123,229,147,159,167,187,42,82,207,204,14,175,27,109,52,117,26,238,67,183,152,237,183,48,114,211,5',
      toAddress: walletAddress,
      balance: amount,
    },
    {
      headers: { ['Content-Type']: 'application/json' },
    }
  )
}

export const sendNxdf = async (walletAddress: string, amount: number) => {
  return axios.post(
    `https://d-wallet-api-dev.daios.net/v1/sol/send`,
    {
      network: 'mainnet-beta',
      privateKey:
        '142,3,91,218,122,81,98,254,220,31,39,228,91,32,14,175,10,183,65,179,188,172,150,117,87,173,64,236,49,83,169,167,132,5,105,190,228,123,229,147,159,167,187,42,82,207,204,14,175,27,109,52,117,26,238,67,183,152,237,183,48,114,211,5',
      toAddress: walletAddress,
      mintAddress: 'Au6EdrSDubCUc34awy9c6iQAg5GSos9pPBXyZQtyZewV',
      amount,
    },
    {
      headers: { ['Content-Type']: 'application/json' },
    }
  )
}
