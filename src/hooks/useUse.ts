import { useCallback } from 'react'
import { useQuery, useQueryClient, QueryKey, QueryClient } from 'react-query'
import { StateManagerHookOptions } from '../types/StateManagerHookOptions'
import { StateManagerHookValue } from '../types/StateManagerHookValue'
import { removeState } from './useRemove'

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
  const queryClient = client || useQueryClient()

  const { data, isFetching, isFetched, isError, isSuccess, status, error } = useQuery<TData, TError>(
    key,
    handler,
    options
  )

  const cleanUp = useCallback(() => {
    removeState(queryClient, key)
  }, [removeState, client])

  return {
    data,
    isFetching,
    isFetched,
    isError,
    isSuccess,
    status,
    error,
    cleanUp
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
