import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ILogoutResponse } from "../types/types";
import logoutService from "../api/api";

export function useLogoutCreateQO<TError = Error>(
  options?: Omit<UseMutationOptions<ILogoutResponse, TError>, "mutationFn">
) {
  return useMutation<ILogoutResponse, TError>({
    ...options,
    mutationFn: () => logoutService.logout(),
  });
}
