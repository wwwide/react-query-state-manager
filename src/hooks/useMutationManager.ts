import { useCallback } from 'react'
import { useMutation } from 'react-query'
import { WriteHookOpts } from '../types/WriteHook'

type ServiceFunction<Payload, ReturnValue> = (payload: Payload) => Promise<ReturnValue>

export const useMutationManager = <Payload, ReturnValue>(
  serviceFunction: ServiceFunction<Payload, ReturnValue>,
  opts?: WriteHookOpts<Payload, ReturnValue>
) => {
  const { mutateAsync, isError, isSuccess, isLoading, status } = useMutation((payload: Payload) =>
    serviceFunction(payload)
  )

  const routine = useCallback(
    async (payload: Payload) => {
      try {
        if (opts?.onBefore) {
          await opts.onBefore(payload)
        }
        const result = await mutateAsync(payload)
        if (opts?.onSuccess) {
          await opts.onSuccess(payload, result)
        }
        return result
      } catch (error: unknown) {
        if (opts?.onError) {
          opts.onError(error as Error)
        }
        throw error
      } finally {
        if (opts?.onFinally) {
          opts.onFinally()
        }
      }
    },
    [opts]
  )

  return {
    mutateAsync,
    routine,
    isError,
    isSuccess,
    isLoading,
    status
  }
}
