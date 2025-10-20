import { queryOptions, useQuery } from "@tanstack/react-query";
import { IGetNewsQueryParams } from "../types/types";
import QUERY_KEYS from "@/config/query.keys.config";
import NewsService from "../api/api";

type UseNewsOptions = {
  params?: IGetNewsQueryParams;
};

export const getNewsQueryOptions = (params: IGetNewsQueryParams = {}) => {
  return queryOptions({
    queryKey: [QUERY_KEYS.news, params],
    queryFn: () => NewsService.getNews(params),
  });
};

export const useNews = ({ params }: UseNewsOptions = {}) => {
  return useQuery({
    ...getNewsQueryOptions(params),
  });
};
