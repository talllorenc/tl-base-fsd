import { IMeta } from "@/types/api";

export interface INewsCategoryBadgeProps {
  category: string;
}

export interface IGetNewsQueryParams {
  page?: number;
  perPage?: number;
  category?: string;
  order?: "asc" | "desc"; 
  search?: string;
}

export interface INewsItem {
  id: string;
  slug: string;
  title: string;
  desc: string;
  links: string[];
  imagePath: string[];
  category: string;
  dateCreated: string;
  dateUpdated: string;
}

export interface INewsResponse {
  data: INewsItem[];
  meta: IMeta;
}