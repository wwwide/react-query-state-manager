import { QueryClient, QueryKey } from '@tanstack/react-query';
type UseGetValue = {
    get: <TData>(key: QueryKey) => TData | undefined;
};
export declare const getState: <TData>(queryClient: QueryClient, key: QueryKey) => TData | undefined;
export declare const useGet: (queryClient: QueryClient) => UseGetValue;
export {};
