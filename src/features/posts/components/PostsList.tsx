"use client";

import { buildApiParams } from "@/utils/buildApiParams";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";
import usePostsCreateQO from "../hooks/usePostsCreateQO";
import { EmptyData, ErrorAxios, Spinner } from "@/components/ui";
import PostCard from "./PostCard";
import PostsPagination from "./PostsPagination";

const PostsList = () => {
  const searchParams = useSearchParams();
  const params = buildApiParams(searchParams);

  const {
    data: posts,
    isLoading,
    isError,
    isPlaceholderData,
  } = useQuery(
    usePostsCreateQO(
      { page: 1, perPage: 12, ...params },
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

  if (!posts?.data.length) {
    return <EmptyData text="The list is empty" />;
  }

  return (
    <>
      <div
        className={`grid grid-cols-1 gap-4 w-full ${
          isPlaceholderData && "animate-pulse"
        }`}
      >
        {posts.data.map((item) => (
          <PostCard key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-8">
        <PostsPagination meta={posts.meta} />
      </div>
    </>
  );
};

export default PostsList;
