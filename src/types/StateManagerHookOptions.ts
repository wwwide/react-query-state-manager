export type StateManagerHookOptions<TValue, TError = Error> = {
  staleTime?: number
  keepPreviousData?: boolean
  enabled?: boolean
  refetchInterval?: number | false
  refetchOnMount?: boolean | 'always'
  onSuccess?: (value: TValue) => void
  onError?: (error: TError) => void
}
