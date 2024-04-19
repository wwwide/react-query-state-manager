import { WriteHookOpts } from '../types/WriteHook';
type ServiceFunction<Payload, ReturnValue> = (payload: Payload) => Promise<ReturnValue>;
export declare const useMutationManager: <TPayload, TValue, TError = Error>(serviceFunction: ServiceFunction<TPayload, TValue>, opts?: WriteHookOpts<TPayload, TValue, TError> | undefined) => {
    mutateAsync: import("@tanstack/react-query/build/legacy/types").UseMutateAsyncFunction<TValue, Error, TPayload, unknown>;
    routine: (payload: TPayload) => Promise<TValue>;
    isError: boolean;
    isSuccess: boolean;
    isPending: boolean;
    status: "error" | "idle" | "pending" | "success";
};
export {};
