import { BaseAPIWriteHookOpts } from '../types/WriteHook';
type ServiceFunction<Payload, ReturnValue> = (payload: Payload) => Promise<ReturnValue>;
export declare const useMutationManager: <Payload, ReturnValue>(serviceFunction: ServiceFunction<Payload, ReturnValue>, opts?: BaseAPIWriteHookOpts<Payload, ReturnValue> | undefined) => {
    mutateAsync: import("react-query").UseMutateAsyncFunction<ReturnValue, unknown, Payload, unknown>;
    routine: (payload: Payload) => Promise<ReturnValue>;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    status: "error" | "idle" | "loading" | "success";
};
export {};
