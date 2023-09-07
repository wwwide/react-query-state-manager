import { useCallback } from 'react'
import { useQuery, useQueryClient, QueryKey, QueryClient } from 'react-query'
import { StateManagerHookOptions } from '../types/StateManagerHookOptions'
import { StateManagerHookValue } from '../types/StateManagerHookValue'
import { removeState } from './useRemove'

/**
 * useUse hook return value.
 */
type UseUseValue = {
  use: <TData>(
    key: QueryKey,
    handler: () => Promise<TData>,
    options?: StateManagerHookOptions<TData>
  ) => StateManagerHookValue<TData>
}

/**
 * Uses state from given key,
 * @param {QueryKey} key - item key.
 * @param {() => Promise<TData>} handler - promise based function to fetch/generate data.
 * @param {StateManagerHookOptions<TData>} options - react-query hook options.
 */
const useState = <TData>(
  key: QueryKey,
  handler: () => Promise<TData>,
  client?: QueryClient,
  options?: StateManagerHookOptions<TData>
): StateManagerHookValue<TData> => {
  const queryClient = client || useQueryClient()

  const { data, isFetching, isFetched, isError, isSuccess, status, error } = useQuery<TData, Error>(
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
    <TData>(key: QueryKey, handler: () => Promise<TData>, options?: StateManagerHookOptions<TData>) =>
      useState(key, handler, client, options),
    [useState, client]
  )

  return {
    use
  }
}
