import { API, API_ROUTES } from "@/config/api";
import { IGetPostsQueryParams, IPostItem, IPostsResponse } from "../types";

class PostsService {
  async getPosts(params: IGetPostsQueryParams = {}) {
    const { data } = await API.get<IPostsResponse>(API_ROUTES.posts, {
      params,
    });
    return data;
  }

  async getPostBySlug(slug: string) {
    const { data } = await API.get<IPostItem>(
      `${API_ROUTES.posts}/${slug}`
    );
    return data;
  }
}

const postsService = new PostsService();

export default postsService;