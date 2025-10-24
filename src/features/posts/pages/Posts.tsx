"use client";

import { PostsList, PostsSearch, PostsSort } from "../components";

const News = () => {
  return (
    <>
      <h1>Knowledge Base</h1>
      <p className="text-foregroundSecondary">
        Here you can find all knowledge base
      </p>

      <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
        <PostsSearch />

        <div className="flex items-center flex-wrap gap-4">
          <PostsSort />
        </div>
      </div>

      <div className="mt-8">
        <PostsList />
      </div>
    </>
  );
};

export default News;
