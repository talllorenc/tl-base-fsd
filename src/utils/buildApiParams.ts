interface IGetParams {
  order?: "asc" | "desc";
  category?: "ANNOUNCEMENT" | "EVENT" | "UPDATE";
  search?: string;
}

export const buildApiParams = (searchParams: URLSearchParams) => {
  const params: IGetParams = {};

  // Sort
  const order = searchParams.get("order");
  if (order) {
    params.order = order as "asc" | "desc";
  }

  // Category
  const category = searchParams.get("category");
  if (category) {
    params.category = category as "ANNOUNCEMENT" | "EVENT" | "UPDATE";
  }

  // Search
  const search = searchParams.get("search");
  if (search) {
    params.search = search;
  }

  return params;
};
