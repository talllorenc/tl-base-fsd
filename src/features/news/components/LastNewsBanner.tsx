"use client";

import { DateDisplay, ErrorAxios, LoadingContainer, SmoothImage } from "@/components/ui";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import useNewsCreateQO from "../hooks/useNewsCreateQO";
import NewsCategoryBadge from "./NewsCategoryBadge";

const LastNewsBanner = () => {
  const {
    data: news,
    isLoading,
    isError,
  } = useQuery(
    useNewsCreateQO(
      { page: 1, perPage: 1 },
      { select: (data) => data.data[0] }
    )
  );

  if (isLoading) {
    return <LoadingContainer containerHeight={300} />;
  }

  if (isError) {
    return <ErrorAxios />;
  }

  if (!news) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="relative border border-outline h-[300px] rounded-xl">
        {news.imagePath?.length ? (
          <SmoothImage
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${news.imagePath[0]}`}
            alt={`Image for news: ${news.title}`}
            className="rounded-xl object-cover"
          />
        ) : null}
        <div className="absolute inset-0 backdrop-blur-xs rounded-xl z-[1]" />
        <div className="absolute inset-0 z-[2] flex gap-4 flex-col items-center justify-center text-center p-4">
          <NewsCategoryBadge category={news.category} />
          <h2 className="text-[#d4d4d4] hover:opacity-70 duration-200 line-clamp-3">
            <Link href={`/news/${news.slug}`}>{news.title}</Link>
          </h2>
          <DateDisplay className="text-[#d4d4d4]" date={news.dateCreated} />
        </div>
      </div>
    </div>
  );
};

export default LastNewsBanner;
