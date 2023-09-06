import { QueryKey } from '@tanstack/react-query';
import { StateManagerHookOptions } from '../types/StateManagerHookOptions';
import { StateManagerHookValue } from '../types/StateManagerHookValue';
type UseUseValue = {
    use: <TData>(key: QueryKey, handler: () => Promise<TData>, options?: StateManagerHookOptions<TData>) => StateManagerHookValue<TData>;
};
export declare const useState: <TData>(key: QueryKey, handler: () => Promise<TData>, options?: StateManagerHookOptions<TData> | undefined) => StateManagerHookValue<TData>;
export declare const useUse: () => UseUseValue;
export {};
