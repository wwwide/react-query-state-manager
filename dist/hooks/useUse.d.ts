import { QueryKey, QueryClient } from '@tanstack/react-query';
import { StateManagerHookOptions } from '../types/StateManagerHookOptions';
import { StateManagerHookValue } from '../types/StateManagerHookValue';
type UseUseValue = {
    use: <TData>(key: QueryKey, handler: () => Promise<TData>, options?: StateManagerHookOptions<TData>) => StateManagerHookValue<TData>;
};
export declare const useUse: (client?: QueryClient) => UseUseValue;
export {};
