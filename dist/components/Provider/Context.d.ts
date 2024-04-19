import { QueryClient } from '@tanstack/react-query';
import * as React from 'react';
type ContextValue = {
    queryClient: QueryClient;
};
export declare const Context: React.Context<ContextValue>;
export declare const useContext: () => ContextValue;
export {};
