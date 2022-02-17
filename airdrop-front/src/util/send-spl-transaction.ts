import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  Token,
  TOKEN_PROGRAM_ID,
} from '@solana/spl-token';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import {
  Connection,
  PublicKey,
  Transaction,
  TransactionInstruction,
} from '@solana/web3.js';
import { getOrCreateAssociatedTokenAccount } from './get-or-create-associated-token-account';

export async function SendSPLTransaction(
  connection: Connection,
  publicKey: PublicKey,
  signTransaction: any,
  mintAddress: string,
  toAddress: string,
  amount: number,
  decimals: number
) {
  if (!toAddress || !amount) return;
  console.log('Processing transaction...');

  try {
    if (!publicKey || !signTransaction) throw new WalletNotConnectedError();

    const mintPublicKey = new PublicKey(mintAddress);
    const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      publicKey,
      mintPublicKey,
      publicKey,
      signTransaction
    );

    const instructions: TransactionInstruction[] = [];

    const destPublicKey = new PublicKey(toAddress);
    const associatedDestinationTokenAddr =
        await Token.getAssociatedTokenAddress(
            ASSOCIATED_TOKEN_PROGRAM_ID,
            TOKEN_PROGRAM_ID,
            mintPublicKey,
            destPublicKey
        );

    const receiverAccount = await connection.getAccountInfo(
        associatedDestinationTokenAddr
    );

    if (receiverAccount === null) {
      throw new Error('SPL account is not exists.');
    }

    instructions.push(
        Token.createTransferInstruction(
            TOKEN_PROGRAM_ID,
            fromTokenAccount.address,
            associatedDestinationTokenAddr,
            publicKey,
            [],
            amount * decimals
        )
    );

    const transaction = new Transaction().add(...instructions);

    const blockHash = await connection.getRecentBlockhash();
    transaction.feePayer = await publicKey;
    transaction.recentBlockhash = await blockHash.blockhash;
    const signed = await signTransaction(transaction);

    const result = await connection.sendRawTransaction(signed.serialize());

    console.log('Transaction sent:', result);
  } catch (error: any) {
    console.log(`Transaction failed: ${error.message}`);
  }
}
