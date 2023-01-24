import { QueryStatus } from 'react-query'

export type StateManagerHookValue<V> = {
  data: V | undefined
  isFetching: boolean
  isFetched: boolean
  isError: boolean
  isIdle: boolean
  isSuccess: boolean
  status: QueryStatus
  error: Error | null
  cleanUp: () => void
}
