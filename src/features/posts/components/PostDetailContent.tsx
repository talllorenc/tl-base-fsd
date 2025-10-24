"use client";

import {
  DateDisplay,
  ErrorAxios,
  SafeHtml,
  ShareButton,
  Spinner,
} from "@/components/ui";
import { useQuery } from "@tanstack/react-query";
import { Link } from "lucide-react";
import { usePathname } from "next/navigation";
import { usePostBySlugCreateQO } from "../hooks/usePostsBySlugQO";

interface IPostDetailContentProps {
  slug: string;
}

const PostDetailContent = ({ slug }: IPostDetailContentProps) => {
  const pathName = usePathname();
  const URL = `${process.env.NEXT_PUBLIC_CLIENT_URL}${pathName}`;

  const {
    data: post,
    isLoading,
    isError,
  } = useQuery(usePostBySlugCreateQO(slug));

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

  if (!post) {
    return <ErrorAxios />;
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <DateDisplay date={post.dateCreated} />
        <ShareButton url={URL} />
      </div>

      <h1 className="mt-2">{post.title}</h1>

      <div className="mt-8 bg-backgroundSecondary p-4 border border-outline rounded-xl">
        <SafeHtml html={post.desc} />
      </div>

      {post.links.length !== 0 && (
        <div className="mt-8">
          <p className="font-medium">Useful links</p>
          <div className="flex flex-col gap-2 mt-2">
            {post.links.map((link, index) => (
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
    </>
  );
};

export default PostDetailContent;
