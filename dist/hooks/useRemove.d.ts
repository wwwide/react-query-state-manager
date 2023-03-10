import { QueryClient, QueryKey } from 'react-query';
type UseRemoveValue = {
    remove: (key: QueryKey) => void;
    removeAll: () => void;
};
export declare const removeState: (queryClient: QueryClient, key: QueryKey) => void;
export declare const removeAllState: (queryClient: QueryClient) => void;
export declare const useRemove: (queryClient: QueryClient) => UseRemoveValue;
export {};
