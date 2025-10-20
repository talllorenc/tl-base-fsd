import axios from "axios";
import { API_ROUTES } from "@/shared/config/api.config";
import { IGetNewsQueryParams, INewsItem, INewsResponse } from "../types/types";

class NewsService {
  async getNews(params: IGetNewsQueryParams = {}) {
    const { data } = await axios.get<INewsResponse>(API_ROUTES.NEWS, {
      params,
    });
    return data;
  }

  async getNewsBySlug(slug: string) {
    const { data } = await axios.get<INewsItem>(
      `${API_ROUTES.NEWS}/${slug}`
    );
    return data;
  }
}

export default new NewsService();
