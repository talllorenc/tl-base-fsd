import { IGetNewsQueryParams, INewsItem, INewsResponse } from "../types/types";
import { API, API_ROUTES } from "@/config/api";

class NewsService {
  async getNews(params: IGetNewsQueryParams = {}) {
    const { data } = await API.get<INewsResponse>(API_ROUTES.news, {
      params,
    });
    return data;
  }

  async getNewsBySlug(slug: string) {
    const { data } = await API.get<INewsItem>(
      `${API_ROUTES.news}/${slug}`
    );
    return data;
  }
}

const newsService = new NewsService();

export default newsService;