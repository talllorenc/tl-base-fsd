import { queryOptions, UseQueryOptions } from "@tanstack/react-query";
import { INewsItem } from "../types/types";
import QUERY_KEYS from "@/shared/config/query.keys.config";
import NewsService from "../api/api";

export function useNewsBySlugQueryOptions<TData = INewsItem, TError = Error>(
  slug: string,
  options?: Omit<
    UseQueryOptions<INewsItem, TError, TData>,
    "queryKey" | "queryFn"
  >
) {
  return queryOptions({
    ...options,
    queryKey: [QUERY_KEYS.news, slug],
    queryFn: () => NewsService.getNewsBySlug(slug),
  });
}
