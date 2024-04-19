import { useCallback } from 'react'
import { QueryClient, QueryKey } from '@tanstack/react-query'

/**
 * useRemove hook return value.
 */
type UseRemoveValue = {
  remove: (key: QueryKey) => void
  removeAll: () => void
}

/**
 * Removes data from the state for a given key.
 * @param {QueryClient} queryClient - react-query client instance.
 * @param {QueryKey} key - key to delete data from.
 */
export const removeState = (queryClient: QueryClient, queryKey: QueryKey) => {
  queryClient.removeQueries({ queryKey })
}

/**
 * Removes all data from the state.
 * @param {QueryClient} queryClient - react-query client instance.
 */
export const removeAllState = (queryClient: QueryClient) => {
  queryClient.removeQueries()
}

/**
 * Hook producing function for deleting data from react-query state.
 * @param {QueryClient} queryClient react-query client instance.
 * @returns {UseRemoveValue} - "delete" function.
 */
export const useRemove = (queryClient: QueryClient): UseRemoveValue => {
  const remove = useCallback((key: QueryKey) => removeState(queryClient, key), [removeState])
  const removeAll = useCallback(() => removeAllState(queryClient), [removeAllState])

  return {
    remove,
    removeAll
  }
}
