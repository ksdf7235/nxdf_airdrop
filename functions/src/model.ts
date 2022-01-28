export interface User {
  event_id: string
  email: string
  wallet_address: string
  referral_email?: string
  retweet_link?: string
  reddit_link?: string
}

export enum ExceptionType {
  ALREADY_JOINED = 'already-joined',
  INVALID_PARAMS = 'invalid-params',
}

export enum ResponseStatus {
  ERROR = 'error',
  SUCCESS = 'success',
}
