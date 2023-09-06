import { QueryClient, QueryKey } from '@tanstack/react-query';
type UseInvalidateValue = {
    invalidate: (key: QueryKey) => Promise<void>;
};
export declare const invalidateState: (queryClient: QueryClient, key: QueryKey) => Promise<void>;
export declare const useInvalidate: (queryClient: QueryClient) => UseInvalidateValue;
export {};
