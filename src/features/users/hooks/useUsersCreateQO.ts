import { queryOptions, UseQueryOptions } from "@tanstack/react-query";
import { IGetUsersQueryParams, IUsersResponse } from "../types/types";
import QUERY_KEYS from "@/config/queryKeys";
import UsersService from "../api/api";

export default function useUsersCreateQO<
  TData = IUsersResponse,
  TError = Error
>(
  params?: IGetUsersQueryParams,
  options?: Omit<
    UseQueryOptions<IUsersResponse, TError, TData>,
    "queryKey" | "queryFn"
  >
) {
  return queryOptions({
    ...options,
    queryKey: [QUERY_KEYS.users, params],
    queryFn: () => UsersService.getUsers(params),
  });
}
