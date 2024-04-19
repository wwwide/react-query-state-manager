import { useCallback } from 'react'
import { QueryClient, QueryKey } from '@tanstack/react-query'

/**
 * useGet hook return value.
 */
type UseGetValue = {
  get: <TData>(key: QueryKey) => TData | undefined
}

/**
 * Gets state from for a given key.
 * @param {QueryClient} queryClient - react-query client instance.
 * @param {QueryKey} key - item key.
 */
export const getState = <TData>(queryClient: QueryClient, key: QueryKey): TData | undefined =>
  queryClient.getQueryData(key)

/**
 * Hook producing function for getting data from react-query state.
 * @param {QueryClient} queryClient react-query client instance.
 * @returns {UseGetValue} - "get" function.
 */
export const useGet = (queryClient: QueryClient): UseGetValue => {
  const get = useCallback(<TData>(key: QueryKey): TData | undefined => getState(queryClient, key), [getState])

  return {
    get
  }
}
