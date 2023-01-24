import { QueryClient, QueryKey } from 'react-query';
import { StateManagerHookOptions } from './StateManagerHookOptions';
import { StateManagerHookValue } from './StateManagerHookValue';
export type StateManager = {
    __client__: QueryClient;
    set: <TData>(key: QueryKey, data: TData) => void;
    remove: (key: QueryKey) => void;
    removeAll: () => void;
    get: <TData>(key: QueryKey) => TData | unknown;
    invalidate: (key: QueryKey) => Promise<void>;
    use: <TData>(key: QueryKey, handler: () => Promise<TData>, options?: StateManagerHookOptions<TData>) => StateManagerHookValue<TData>;
};
