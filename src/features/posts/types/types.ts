import { IMeta } from "@/types/api";

export interface IGetPostsQueryParams {
  page?: number;
  perPage?: number;
  order?: "asc" | "desc";
  search?: string;
}

interface IAuthor {
  firstName: string;
  lastName: string;
}

export interface IPostItem {
  id: string;
  slug: string;
  title: string;
  desc: string;
  links: string[];
  author: IAuthor;
  imagePath: string[];
  dateCreated: string;
  dateUpdated: string;
}

export interface IPostsResponse {
  data: IPostItem[];
  meta: IMeta;
}
