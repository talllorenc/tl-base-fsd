import { queryOptions, UseQueryOptions } from "@tanstack/react-query";
import QUERY_KEYS from "@/config/queryKeys";
import ProfileService from "../api/api";
import { IProfileResponse } from "../types";

export function useGetProfileCreateQO<TData = IProfileResponse, TError = Error>(
  options?: Omit<
    UseQueryOptions<IProfileResponse, TError, TData>,
    "queryKey" | "queryFn"
  >
) {
  return queryOptions({
    ...options,
    queryKey: [QUERY_KEYS.profile],
    queryFn: () => ProfileService.getMe(),
  });
}
