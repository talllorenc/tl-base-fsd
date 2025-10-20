"use client";

import { NewsList } from "@/entities/news";
import { NewsFilter, NewsSort } from "@/features/news";
import NewsSearch from "@/features/news/search/ui/NewsSearch";

const NewsPage = () => {
  return (
    <>
      <h1>Portal News</h1>
      <p className="text-foregroundSecondary">
        Latest news and updates from tl-base
      </p>

      <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
        <NewsSearch />

        <div className="flex items-center flex-wrap gap-4">
          <NewsFilter />
          <NewsSort />
        </div>
      </div>

      <div className="mt-8">
        <NewsList />
      </div>
    </>
  );
};

export default NewsPage;
