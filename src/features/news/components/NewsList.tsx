"use client";

import { buildApiParams } from "@/utils/buildApiParams";
import NewsCard from "./NewsCard";
import { useSearchParams } from "next/navigation";
import useNewsQueryOptions from "../hooks/useNewsQueryOptions";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@/components/ui/spinner";
import { ErrorAxios } from "@/components/ui/error-axios";
import { EmptyData } from "@/components/ui/empty-data";
import { NewsPagination } from "./NewsPagination";

export const NewsList = () => {
  const searchParams = useSearchParams();
  const params = buildApiParams(searchParams);

  const {
    data: news,
    isLoading,
    isError,
    isPlaceholderData,
  } = useQuery(useNewsQueryOptions({ page: 1, perPage: 9, ...params }));

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
    <>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full ${
          isPlaceholderData && "animate-pulse"
        }`}
      >
        {news.data.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-8">
        <NewsPagination meta={news.meta} />
      </div>
    </>
  );
};
