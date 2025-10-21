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

export interface INewsMeta {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
}

export interface INewsResponse {
  data: INewsItem[];
  meta: INewsMeta;
}
