import { QueryClient, QueryKey } from 'react-query';
type UseSetValue = {
    set: <TData>(key: QueryKey, data: TData) => void;
};
export declare const setState: <TData>(queryClient: QueryClient, key: QueryKey, data: TData) => TData;
export declare const useSet: (queryClient: QueryClient) => UseSetValue;
export {};
