import { StateManagerHookValue } from './StateManagerHookValue';
export type ReadHookCallbacks<TValue, TError = Error> = {
    onSuccess?: (value: TValue) => void;
    onError?: (error: TError) => void;
};
export type ReadHook<TValue = unknown, TParams = unknown, TError = Error> = (config?: TParams, callbacks?: ReadHookCallbacks<TValue, TError>) => StateManagerHookValue<TValue, TError>;
