"use client";

import { useGetNewsBySlug } from "../model/useGetNews";
import {
  ErrorAxios,
  Spinner,
  DateDisplay,
  SafeHtml,
  SmoothImage,
} from "@/shared/ui";
import NewsCategoryBadge from "./NewsCategoryBadge";

interface INewsDetailContentProps {
  slug: string;
}

const NewsDetailContent = ({ slug }: INewsDetailContentProps) => {
  const { data: news, isLoading, isError } = useGetNewsBySlug(slug);

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

  if (!news) {
    return <ErrorAxios />;
  }

  return (
    <>
      <div className="flex items-center gap-4">
        <NewsCategoryBadge category={news.category} />
        <DateDisplay date={news.dateCreated} />
      </div>

      <h1 className="mt-2">{news.title}</h1>

      <div className="relative h-[500px] rounded-xl overflow-hidden group-hover:opacity-70 duration-200 mt-4 border border-outline">
        {news.imagePath.length && (
          <SmoothImage
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${news.imagePath[0]}`}
            alt={news.title}
            className="rounded-xl object-cover"
          />
        )}
      </div>

      <div className="mt-8">
        <SafeHtml html={news.desc}/>
      </div>
    </>
  );
};

export default NewsDetailContent;
