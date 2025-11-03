"use client";

import {
  DateDisplay,
  ErrorAxios,
  GiscusComments,
  LightboxGallery,
  SafeHtml,
  ShareButton,
  Spinner,
} from "@/components/ui";
import { useQuery } from "@tanstack/react-query";
import { Link } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { usePostBySlugCreateQO } from "../hooks/usePostsBySlugQO";
import { useEffect, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

interface IPostDetailContentProps {
  slug: string;
}

const PostDetailContent = ({ slug }: IPostDetailContentProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const descRef = useRef<HTMLDivElement>(null);
  const URL = `${process.env.NEXT_PUBLIC_CLIENT_URL}${pathName}`;

  const {
    data: post,
    isLoading,
    isError,
  } = useQuery(usePostBySlugCreateQO(slug));

  useEffect(() => {
    if (!descRef.current) return;

    const codeBlocks = descRef.current.querySelectorAll("pre code");

    codeBlocks.forEach((block) => {
      const el = block as HTMLElement;

      if (![...el.classList].some((cls) => cls.startsWith("language-"))) {
        el.classList.add("language-typescript");
      }

      hljs.highlightElement(el);
    });
  }, [post?.desc]);

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

  const images = post?.imagePath.map((img: string) => ({
    src: `${process.env.NEXT_PUBLIC_SERVER_URL}${img}`,
    alt: `${post.title} image`,
  }));

  if (!post) {
    router.replace("/404");
    return null;
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <DateDisplay date={post.dateCreated} />
        <ShareButton url={URL} />
      </div>

      <h1 className="mt-2">{post.title}</h1>

      <div className="mt-8 bg-backgroundSecondary p-4 border border-outline rounded-xl">
        <div ref={descRef}>
          <SafeHtml html={post.desc} />
        </div>
        {images && images.length > 0 && (
          <div className="mt-8">
            <h3 className="mb-2">Gallery</h3>
            <LightboxGallery images={images} />
          </div>
        )}
      </div>

      {post.links.length !== 0 && (
        <div className="mt-8">
          <h3 className="mb-2">Useful Links</h3>
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

      <div className="mt-8">
        <GiscusComments />
      </div>
    </>
  );
};

export default PostDetailContent;
