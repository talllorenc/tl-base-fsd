import { queryOptions, UseQueryOptions } from "@tanstack/react-query";
import { IUserItem } from "../types/types";
import UsersService from "../api/api";
import QUERY_KEYS from "@/config/queryKeys";

export function useUserByIdQO<TData = IUserItem, TError = Error>(
  id: string,
  options?: Omit<
    UseQueryOptions<IUserItem, TError, TData>,
    "queryKey" | "queryFn"
  >
) {
  return queryOptions({
    ...options,
    queryKey: [QUERY_KEYS.users, id],
    queryFn: () => UsersService.getUserById(id),
  });
}