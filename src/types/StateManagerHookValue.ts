import { QueryStatus } from '@tanstack/react-query'

export type StateManagerHookValue<V> = {
  data: V | undefined
  isFetching: boolean
  isFetched: boolean
  isError: boolean
  isSuccess: boolean
  status: QueryStatus
  error: Error | null
  cleanUp: () => void
}
