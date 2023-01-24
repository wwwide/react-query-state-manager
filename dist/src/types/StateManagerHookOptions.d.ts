export type StateManagerHookOptions<ReturnValue> = {
    staleTime?: number;
    keepPreviousData?: boolean;
    enabled?: boolean;
    refetchInterval?: number | false;
    refetchOnMount?: boolean | 'always';
    onSuccess?: (value: ReturnValue) => void;
    onError?: (error: Error) => void;
};
