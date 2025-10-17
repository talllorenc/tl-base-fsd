"use client";

import { useQuery } from "@tanstack/react-query";
import NewsService from "@/entities/news/api/api";
import QUERY_KEYS from "@/shared/config/query.keys.config";

export const useLatestNews = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.news.mainBanner],
    queryFn: () => NewsService.getNews({ page: 1, perPage: 1, order: "desc" }),
  });
};
