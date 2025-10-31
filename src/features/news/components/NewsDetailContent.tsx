"use client";

import {
  DateDisplay,
  ErrorAxios,
  GiscusComments,
  SafeHtml,
  ShareButton,
  SmoothImage,
  Spinner,
} from "@/components/ui";
import { useNewsBySlugCreateQO } from "../hooks/useNewsBySlugQO";
import NewsCategoryBadge from "./NewsCategoryBadge";
import { useQuery } from "@tanstack/react-query";
import { Link } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface INewsDetailContentProps {
  slug: string;
}

const NewsDetailContent = ({ slug }: INewsDetailContentProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const URL = `${process.env.NEXT_PUBLIC_CLIENT_URL}${pathName}`;

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
    router.replace("/404");
    return null;
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <NewsCategoryBadge category={news.category} />
          <DateDisplay date={news.dateCreated} />
        </div>
        <ShareButton url={URL} />
      </div>

      <h1 className="mt-2">{news.title}</h1>

      {news.imagePath.length && (
        <div className="relative h-[200px] md:h-[500px] rounded-xl overflow-hidden mt-8 border border-outline">
          <SmoothImage
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${news.imagePath[0]}`}
            alt={`Image for news: ${news.title}`}
            className="rounded-xl object-cover"
          />
        </div>
      )}

      <div className="mt-8 bg-backgroundSecondary p-4 border border-outline rounded-xl">
        <SafeHtml html={news.desc} />
      </div>

      {news.links.length !== 0 && (
        <div className="mt-8">
          <h3 className="mb-2">Useful Links</h3>
          <div className="flex flex-col gap-2">
            {news.links.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 h-9 px-4 bg-backgroundSecondary border border-outline rounded-xl hover:opacity-70 duration-200 w-fit max-w-full"
              >
                <Link className="shrink-0" size={16} />
                <span className="truncate block min-w-0 max-w-full">
                  {link}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8">
        <GiscusComments />
      </div>
    </>
  );
};

export default NewsDetailContent;
