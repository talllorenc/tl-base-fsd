"use client";

import { useGetNews } from "../model/useGetNews";
import NewsCard from "./NewsCard";

const NewsList = () => {
  const {
    data: news,
    isLoading,
    isError,
  } = useGetNews({
    page: 1,
    perPage: 5,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  if (!news?.data.length) {
    return <div>No news</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
      {news.data.map((item) => (
        <NewsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NewsList;
