import { useCallback } from 'react'
import { useQuery, QueryKey, QueryClient } from '@tanstack/react-query'
import { StateManagerHookOptions } from '../types/StateManagerHookOptions'
import { StateManagerHookValue } from '../types/StateManagerHookValue'
import { removeState } from './useRemove'
import { invalidateState } from './useInvalidate'
import { useContext } from '../components/Provider'

/**
 * useUse hook return value.
 */
type UseUseValue = {
  use: <TData, TError = Error>(
    key: QueryKey,
    handler: () => Promise<TData>,
    options?: StateManagerHookOptions<TData, TError>
  ) => StateManagerHookValue<TData, TError>
}

/**
 * Uses state from given key,
 * @param {QueryKey} key - item key.
 * @param {() => Promise<TData>} handler - promise based function to fetch/generate data.
 * @param {StateManagerHookOptions<TData, TError>} options - react-query hook options.
 */
const useState = <TData, TError = Error>(
  key: QueryKey,
  handler: () => Promise<TData>,
  client?: QueryClient,
  options?: StateManagerHookOptions<TData, TError>
): StateManagerHookValue<TData, TError> => {
  const context = useContext()
  const queryClient = client || context.queryClient

  const { data, isFetching, isFetched, isError, isSuccess, status, error } = useQuery<TData, TError>({
    ...options,    
    queryKey: key,
    queryFn: handler
  }, queryClient)

  const cleanUp = useCallback(() => {
    removeState(queryClient, key)
  }, [queryClient, key])

  const invalidate = useCallback(() => invalidateState(queryClient, key), [invalidateState, queryClient, key])

  return {
    data,
    isFetching,
    isFetched,
    isError,
    isSuccess,
    status,
    error,
    cleanUp,
    invalidate
  }
}

/**
 * Hook producing function for using data from react-query state.
 * @returns {UseUseValue} - "get" function.
 */
export const useUse = (client?: QueryClient): UseUseValue => {
  const use = useCallback(
    <TData, TError>(key: QueryKey, handler: () => Promise<TData>, options?: StateManagerHookOptions<TData, TError>) =>
      useState(key, handler, client, options),
    [useState, client]
  )

  return {
    use
  }
}
