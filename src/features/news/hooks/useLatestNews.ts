"use client";

import QUERY_KEYS from "@/config/query.keys.config";
import { useQuery } from "@tanstack/react-query";
import NewsService from "../api/api";

export const useLatestNews = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.news.mainBanner],
    queryFn: () => NewsService.getNews({ page: 1, perPage: 1, order: "desc" }),
  });
};
