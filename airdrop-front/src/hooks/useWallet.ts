import { useEffect, useState } from 'react'
import { useIsMobile } from './useIsMobile'
import {Connection, PublicKey,Transaction,TransactionSignature} from '@solana/web3.js'
import { Adapter, MessageSignerWalletAdapterProps, SendTransactionOptions, SignerWalletAdapterProps, WalletName, WalletReadyState } from '@solana/wallet-adapter-base';

// export interface WalletContextState{
//   autoConnect: boolean;
//   publicKey: PublicKey ;
//   connecting: boolean;
//   connected: boolean;
//   disconnecting: boolean;
//   select(walletName: WalletName): void;
//   connect(): Promise<void>;
//   disconnect(): Promise<void>;
//   sendTransaction(transaction: Transaction, connection: Connection, options?: SendTransactionOptions): Promise<TransactionSignature>;
//   signTransaction: SignerWalletAdapterProps['signTransaction'] | undefined;
//   signAllTransactions: SignerWalletAdapterProps['signAllTransactions'] | undefined;
//   signMessage: MessageSignerWalletAdapterProps['signMessage'] | undefined;
// }

export const useWallet = () => {
  const [walletAddress, setWalletAddress] = useState(null)
  const isMobile = useIsMobile()

  // Actions
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window

      if (solana) {
        if (solana.isPhantom) {
          const response = await solana.connect({ onlyIfTrusted: true })

          /*
           * Set the user's publicKey in state to be used later!
           */
          setWalletAddress(response.publicKey.toString())
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const connectWallet = async () => {
    const { solana } = window

    if (solana) {
      const response = await solana.connect()
      setWalletAddress(response.publicKey.toString())
    }
  }

  // UseEffects
  useEffect(() => {
    const onLoad = async () => {
      if (isMobile) {
        return
      }
      await checkIfWalletIsConnected()
    }
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [isMobile])

  return {
    walletAddress,
    connectWallet,
  }
}
