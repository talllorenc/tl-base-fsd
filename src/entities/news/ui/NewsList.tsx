"use client";

import { useGetNews } from "../model/useGetNews";
import NewsCard from "./NewsCard";
import { EmptyData, ErrorAxios, Spinner } from "@/shared/ui";
import { useSearchParams } from "next/navigation";
import { buildApiParams } from "@/shared/lib/utils/buildApiParams";

const NewsList = () => {
  const searchParams = useSearchParams();
  const params = buildApiParams(searchParams);

  const {
    data: news,
    isLoading,
    isError,
    isPlaceholderData,
  } = useGetNews({
    page: 1,
    perPage: 5,
    ...params,
  });

  if (isLoading) {
    return (
      <div className="mt-32 flex items-center justify-center">
        <Spinner size={48} />
      </div>
    );
  }

  if (isError) {
    return <ErrorAxios />;
  }

  if (!news?.data.length) {
    return <EmptyData text="No news yet" />;
  }

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full ${
        isPlaceholderData && "animate-pulse"
      }`}
    >
      {news.data.map((item) => (
        <NewsCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NewsList;
