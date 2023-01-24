import { QueryStatus } from 'react-query'

type WriteHookValue<Payload, ReturnValue> = {
  routine: (payload: Payload) => Promise<ReturnValue>
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  status: QueryStatus
}

export interface BaseAPIWriteHookOpts<Payload, ReturnValue> {
  onBefore?: (payload: Payload) => Promise<void>
  onSuccess?: (payload: Payload, result: ReturnValue) => Promise<void>
  onError?: (error: Error) => void
  onFinally?: () => Promise<void>
}

export type WriteHook<
  Payload,
  ReturnValue,
  Opts extends BaseAPIWriteHookOpts<Payload, ReturnValue> = BaseAPIWriteHookOpts<Payload, ReturnValue>
> = (opts?: Opts) => WriteHookValue<Payload, ReturnValue>
