import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import loginService from "../api/api";
import { ILoginRequest, ILoginResponse } from "../types/types";

export function useLoginCreateQO<TError = Error>(
  options?: Omit<
    UseMutationOptions<ILoginResponse, TError, ILoginRequest>,
    "mutationFn"
  >
) {
  return useMutation<ILoginResponse, TError, ILoginRequest>({
    ...options,
    mutationFn: (data: ILoginRequest) => loginService.login(data),
  });
}
