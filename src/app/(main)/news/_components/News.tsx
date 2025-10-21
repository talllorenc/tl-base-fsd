import {
  NewsSort,
  NewsFilter,
  NewsSearch,
  NewsList,
  NewsPagination,
} from "@/features/news/components";

const News = () => {
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

export default News;
