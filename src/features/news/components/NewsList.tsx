"use client";

import { buildApiParams } from "@/utils/buildApiParams";
import NewsCard from "./NewsCard";
import { useSearchParams } from "next/navigation";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import useNewsCreateQO from "../hooks/useNewsCreateQO";
import { EmptyData, ErrorAxios, Spinner } from "@/components/ui";
import NewsPagination from "./NewsPagination";

const NewsList = () => {
  const searchParams = useSearchParams();
  const params = buildApiParams(searchParams);

  const {
    data: news,
    isLoading,
    isError,
    isPlaceholderData,
  } = useQuery(
    useNewsCreateQO(
      { page: 1, perPage: 9, ...params },
      {
        placeholderData: keepPreviousData,
      }
    )
  );

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

export default NewsList;
