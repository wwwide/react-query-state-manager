import { WriteHookOpts } from '../types/WriteHook';
type ServiceFunction<Payload, ReturnValue> = (payload: Payload) => Promise<ReturnValue>;
export declare const useMutationManager: <TPayload, TValue, TError = Error>(serviceFunction: ServiceFunction<TPayload, TValue>, opts?: WriteHookOpts<TPayload, TValue, TError> | undefined) => {
    mutateAsync: import("react-query").UseMutateAsyncFunction<TValue, unknown, TPayload, unknown>;
    routine: (payload: TPayload) => Promise<TValue>;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    status: "error" | "idle" | "loading" | "success";
};
export {};
