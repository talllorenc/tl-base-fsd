import { queryOptions, UseQueryOptions } from "@tanstack/react-query";
import { IGetNewsQueryParams, INewsItem, INewsResponse } from "../types/types";
import QUERY_KEYS from "@/config/query.keys.config";
import NewsService from "../api/api";

export default function useNewsQueryOptions<
  TData = INewsResponse,
  TError = Error
>(
  params?: IGetNewsQueryParams,
  options?: Omit<
    UseQueryOptions<INewsResponse, TError, TData>,
    "queryKey" | "queryFn"
  >
) {
  return queryOptions({
    ...options,
    queryKey: [QUERY_KEYS.news, params],
    queryFn: () => NewsService.getNews(params),
  });
}

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
