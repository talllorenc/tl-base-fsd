import { queryOptions, UseQueryOptions } from "@tanstack/react-query";
import { IPostItem } from "../types/types";
import QUERY_KEYS from "@/config/queryKeys";
import postsService from "../api/api";

export function usePostBySlugCreateQO<TData = IPostItem, TError = Error>(
  slug: string,
  options?: Omit<
    UseQueryOptions<IPostItem, TError, TData>,
    "queryKey" | "queryFn"
  >
) {
  return queryOptions({
    ...options,
    queryKey: [QUERY_KEYS.posts, slug],
    queryFn: () => postsService.getPostBySlug(slug),
  });
}
