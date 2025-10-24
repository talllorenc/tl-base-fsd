import { queryOptions, UseQueryOptions } from "@tanstack/react-query";
import { IGetPostsQueryParams, IPostsResponse } from "../types/types";
import QUERY_KEYS from "@/config/queryKeys";
import postsService from "../api/api";

export default function usePostsCreateQO<
  TData = IPostsResponse,
  TError = Error
>(
  params?: IGetPostsQueryParams,
  options?: Omit<
    UseQueryOptions<IPostsResponse, TError, TData>,
    "queryKey" | "queryFn"
  >
) {
  return queryOptions({
    ...options,
    queryKey: [QUERY_KEYS.posts, params],
    queryFn: () => postsService.getPosts(params),
  });
}
