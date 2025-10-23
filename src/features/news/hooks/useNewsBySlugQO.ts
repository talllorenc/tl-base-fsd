import { queryOptions, UseQueryOptions } from "@tanstack/react-query";
import {  INewsItem } from "../types/types";
import NewsService from "../api/api";
import QUERY_KEYS from "@/config/queryKeys";

export function useNewsBySlugCreateQO<TData = INewsItem, TError = Error>(
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