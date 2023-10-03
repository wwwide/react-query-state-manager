import { StateManagerHookValue } from './StateManagerHookValue';
export type ReadHookCallbacks<ReturnValue> = {
    onSuccess?: (value: ReturnValue) => void;
    onError?: (error: Error) => void;
};
export type ReadHook<ReturnValue = unknown, Params = unknown> = (config?: Params, callbacks?: ReadHookCallbacks<ReturnValue>) => StateManagerHookValue<ReturnValue>;
