type WriteHookValue<TPayload, TValue> = {
  routine: (payload: TPayload) => Promise<TValue>
  isPending: boolean
  isError: boolean
  isSuccess: boolean
  status: 'error' | 'idle' | 'pending' | 'success'
}

export interface WriteHookOpts<TPayload, TValue, TError = Error> {
  onBefore?: (payload: TPayload) => Promise<void>
  onSuccess?: (payload: TPayload, result: TValue) => Promise<void>
  onError?: (error: TError) => void
  onFinally?: () => Promise<void>
}

export type WriteHook<
  TPayload,
  TValue,
  TError = Error,
  Opts extends WriteHookOpts<TPayload, TValue, TError> = WriteHookOpts<TPayload, TValue, TError>
> = (opts?: Opts) => WriteHookValue<TPayload, TValue>
