"use client";

import Link from "next/link";
import { ImageOff } from "lucide-react";
import NewsCategoryBadge from "./NewsCategoryBadge";
import { INewsItem } from "../types";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { useNewsBySlugCreateQO } from "../hooks/useNewsBySlugQO";
import { DateDisplay, SafeHtml, SmoothImage } from "@/components/ui";
import { paths } from "@/config/paths";

interface INewsCardProps {
  item: INewsItem;
}

const NewsCard = ({ item }: INewsCardProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const newsBySlugQueryOptions = useNewsBySlugCreateQO(item.slug);

  const handlePrefetch = () => {
    timeoutRef.current = setTimeout(() => {
      router.prefetch(paths.newsDetails.getHref(item.slug));
      queryClient.prefetchQuery(newsBySlugQueryOptions);
    }, 200);
  };

  const cancelPrefetch = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => cancelPrefetch();
  }, []);

  return (
    <Link
      className="w-full flex flex-col border border-outline group rounded-xl hover:opacity-80 transition-opacity duration-200 cursor-pointer overflow-hidden bg-backgroundSecondary"
      href={paths.newsDetails.getHref(item.slug)}
      onMouseEnter={handlePrefetch}
      onMouseLeave={cancelPrefetch}
      onFocus={handlePrefetch}
      onBlur={cancelPrefetch}
    >
      <div className="relative h-[200px] rounded-xl overflow-hidden group-hover:opacity-80 transition-opacity duration-200">
        {item.imagePath.length ? (
          <SmoothImage
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${item.imagePath[0]}`}
            alt={`Image for news: ${item.title}`}
            className="rounded-xl object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-foregroundSecondary">
            <ImageOff size={48} />
            <p className="font-bold uppercase text-foregroundSecondary">
              No image
            </p>
          </div>
        )}

        <div className="absolute top-4 left-4">
          <NewsCategoryBadge category={item.category} />
        </div>
      </div>
      <div className="flex flex-col p-4 gap-4 flex-1">
        <h3 className="group-hover:underline line-clamp-2">{item.title}</h3>
        <SafeHtml
          html={item.desc}
          className="line-clamp-4 tt-paragraph-list-item"
        />
        <DateDisplay date={item.dateCreated} />
      </div>
    </Link>
  );
};

export default NewsCard;
