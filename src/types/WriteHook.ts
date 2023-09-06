type WriteHookValue<Payload, ReturnValue> = {
  routine: (payload: Payload) => Promise<ReturnValue>
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  status: 'error' | 'idle' | 'loading' | 'success'
}

export interface WriteHookOpts<Payload, ReturnValue> {
  onBefore?: (payload: Payload) => Promise<void>
  onSuccess?: (payload: Payload, result: ReturnValue) => Promise<void>
  onError?: (error: Error) => void
  onFinally?: () => Promise<void>
}

export type WriteHook<
  Payload,
  ReturnValue,
  Opts extends WriteHookOpts<Payload, ReturnValue> = WriteHookOpts<Payload, ReturnValue>
> = (opts?: Opts) => WriteHookValue<Payload, ReturnValue>
