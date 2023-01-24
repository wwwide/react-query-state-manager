import { useCallback } from 'react'
import { QueryClient, QueryKey } from 'react-query'

/**
 * useSet hook return value.
 */
type UseSetValue = {
  set: <TData>(key: QueryKey, data: TData) => void
}

/**
 * Set state for given key.
 * @param {QueryClient} queryClient - react-query client instance.
 * @param {QueryKey} key - item key to set data.
 * @param {TData} data - data to set in the key.
 */
export const setState = <TData>(queryClient: QueryClient, key: QueryKey, data: TData): TData =>
  queryClient.setQueryData<TData>(key, data)

/**
 * Hook producing function for setting data to react-query state.
 * @param {QueryClient} queryClient react-query client instance.
 * @returns {UseSetValue} - "set" function.
 */
export const useSet = (queryClient: QueryClient): UseSetValue => {
  const set = useCallback(<TData>(key: QueryKey, data: TData) => setState(queryClient, key, data), [setState])

  return {
    set
  }
}
