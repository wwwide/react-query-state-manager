import { QueryStatus } from 'react-query';
export type StateManagerHookValue<TValue, TError = Error> = {
    data: TValue | undefined;
    isFetching: boolean;
    isFetched: boolean;
    isError: boolean;
    isSuccess: boolean;
    status: QueryStatus;
    error: TError | null;
    cleanUp: () => void;
    invalidate: () => Promise<void>;
};
