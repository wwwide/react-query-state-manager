import { useCallback } from 'react'
import { useMutation } from '@tanstack/react-query'
import { WriteHookOpts } from '../types/WriteHook'

type ServiceFunction<Payload, ReturnValue> = (payload: Payload) => Promise<ReturnValue>

export const useMutationManager = <TPayload, TValue, TError = Error>(
  serviceFunction: ServiceFunction<TPayload, TValue>,
  opts?: WriteHookOpts<TPayload, TValue, TError>
) => {
  const { mutateAsync, isError, isSuccess, isPending, status } = useMutation({
    mutationFn: (payload: TPayload) => serviceFunction(payload)
  })

  const routine = useCallback(
    async (payload: TPayload) => {
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
          opts.onError(error as TError)
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
    isPending,
    status
  }
}
