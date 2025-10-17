"use client";

import { NewsList } from "@/entities/news";

const NewsPage = () => {
  return (
    <>
      <h1>Portal News</h1>
      <p className="text-foregroundSecondary">
        Latest news and updates from tl-base
      </p>

      <div className="mt-8">
        <NewsList />
      </div>
    </>
  );
};

export default NewsPage;
