"use client";

import {
  DateDisplay,
  ErrorAxios,
  SafeHtml,
  SmoothImage,
  Spinner,
} from "@/components/ui";
import { useNewsBySlugCreateQO } from "../hooks/useNewsBySlugQO";
import NewsCategoryBadge from "./NewsCategoryBadge";
import { useQuery } from "@tanstack/react-query";
import { Link } from "lucide-react";

interface INewsDetailContentProps {
  slug: string;
}

const LINKS = [
  "https://www.google.com",
  "https://www.facebook.com",
  "https://dribbble.com/shots/26530423-UI-UX-Design-for-TraderTale-Social-Platform-for-Traders",
];

const NewsDetailContent = ({ slug }: INewsDetailContentProps) => {
  const {
    data: news,
    isLoading,
    isError,
  } = useQuery(useNewsBySlugCreateQO(slug));

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

      {news.imagePath.length && (
        <div className="relative h-[200px] md:h-[500px] rounded-xl overflow-hidden group-hover:opacity-70 duration-200 mt-8 border border-outline">
          <SmoothImage
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${news.imagePath[0]}`}
            alt={`Image for news: ${news.title}`}
            className="rounded-xl object-cover"
          />
        </div>
      )}

      <div className="mt-8">
        <SafeHtml html={news.desc} />
      </div>

      {LINKS.length !== 0 && (
        <div className="mt-8">
          <p className="font-medium">Useful links</p>
          <div className="flex flex-col gap-2 mt-2">
            {LINKS.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 h-9 px-4 bg-backgroundSecondary border border-outline rounded-xl hover:opacity-70 duration-200 w-fit max-w-full"
              >
                <Link className="shrink-0" size={16}/>
                <span className="truncate block min-w-0 max-w-full">
                  {link}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NewsDetailContent;
