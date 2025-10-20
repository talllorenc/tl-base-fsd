"use client";

import { NewsCategoryBadge } from "@/entities/news";
import {
  DateDisplay,
  ErrorAxios,
  LoadingContainer,
  SmoothImage,
} from "@/shared/ui";
import { useLatestNews } from "../model/useLatestNews";
import Link from "next/link";

const LastNewsBanner = () => {
  const { data: news, isLoading, isError } = useLatestNews();

  if (isLoading) {
    return <LoadingContainer containerHeight={300} />;
  }

  if (isError) {
    return <ErrorAxios />;
  }

  if (!news?.data.length) {
    return null;
  }

  return (
    <div className="w-full">
      <div className="relative border border-outline h-[300px] rounded-xl">
        {news?.data[0]?.imagePath?.length ? (
          <SmoothImage
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${news.data[0].imagePath[0]}`}
            alt="Last news banner"
            className="rounded-xl object-cover"
          />
        ) : null}
        <div className="absolute inset-0 backdrop-blur-xs rounded-xl z-[1]" />
        <div className="absolute inset-0 z-[2] flex gap-4 flex-col items-center justify-center text-center p-4">
          <NewsCategoryBadge category={news?.data[0].category} />
          <h2 className="text-[#d4d4d4] hover:opacity-70 duration-200 line-clamp-3">
            <Link href={`/news/${news?.data[0].slug}`}>
              {news?.data[0].title}
            </Link>
          </h2>
          <DateDisplay
            className="text-[#d4d4d4]"
            date={news?.data[0].dateCreated}
          />
        </div>
      </div>
    </div>
  );
};

// {"/uploads/1748840996075-619659122.jpg"}

export default LastNewsBanner;
