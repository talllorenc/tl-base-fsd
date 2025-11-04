"use client";

import { useRouter } from "next/navigation";
import { IPostItem } from "../types";
import { useQueryClient } from "@tanstack/react-query";
import { usePostBySlugCreateQO } from "../hooks/usePostsBySlugQO";
import { useEffect, useRef } from "react";
import { paths } from "@/config/paths";
import Link from "next/link";
import { DateDisplay, SafeHtml } from "@/components/ui";

interface INewsCardProps {
  item: IPostItem;
}

const PostCard = ({ item }: INewsCardProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const newsBySlugQueryOptions = usePostBySlugCreateQO(item.slug);

  const handlePrefetch = () => {
    timeoutRef.current = setTimeout(() => {
      router.prefetch(paths.postsDetails.getHref(item.slug));
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
      href={paths.postsDetails.getHref(item.slug)}
      onMouseEnter={handlePrefetch}
      onMouseLeave={cancelPrefetch}
      onFocus={handlePrefetch}
      onBlur={cancelPrefetch}
      className="w-full border border-outline rounded-xl bg-backgroundSecondary hover:opacity-80 transition-opacity duration-200 p-4"
    >
      <h3 className="line-clamp-2">{item.title}</h3>
      <div className="flex flex-col mt-4">
        <SafeHtml
          html={item.desc}
          className="line-clamp-2 tt-paragraph-list-item"
        />
        <div className="mt-2">
          <DateDisplay date={item.dateCreated} />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
