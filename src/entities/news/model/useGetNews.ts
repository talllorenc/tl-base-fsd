"use client";

import { useQuery } from "@tanstack/react-query";
import NewsService from "@/entities/news/api/api";
import QUERY_KEYS from "@/shared/config/query.keys.config";
import { IGetNewsQueryParams } from "../types/types";

export const useGetNews = (params?: IGetNewsQueryParams) => {
  return useQuery({
    queryKey: [QUERY_KEYS.news.all, params],
    queryFn: () => NewsService.getNews(params),
  });
};
