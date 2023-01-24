import { useCallback } from 'react'
import { QueryClient, QueryKey } from 'react-query'

/**
 * useInvalidate hook return value.
 */
type UseInvalidateValue = {
  invalidate: (key: QueryKey) => Promise<void>
}

/**
 * Invalidate state for given key,
 * @param {QueryClient} queryClient - react-query client instance.
 * @param {QueryKey} key - item key.
 */
export const invalidateState = (queryClient: QueryClient, key: QueryKey) => queryClient.invalidateQueries(key)

/**
 * Hook producing function for invalidating data in react-query state.
 * @param {QueryClient} queryClient react-query client instance.
 * @returns {UseInvalidateValue} - "invalidate" function.
 */
export const useInvalidate = (queryClient: QueryClient): UseInvalidateValue => {
  const invalidate = useCallback((key: QueryKey) => invalidateState(queryClient, key), [invalidateState])

  return {
    invalidate
  }
}
