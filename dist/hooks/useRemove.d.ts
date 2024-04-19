import { QueryClient, QueryKey } from '@tanstack/react-query';
type UseRemoveValue = {
    remove: (key: QueryKey) => void;
    removeAll: () => void;
};
export declare const removeState: (queryClient: QueryClient, queryKey: QueryKey) => void;
export declare const removeAllState: (queryClient: QueryClient) => void;
export declare const useRemove: (queryClient: QueryClient) => UseRemoveValue;
export {};
