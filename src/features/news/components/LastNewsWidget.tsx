import {
  DateDisplay,
  ErrorAxios,
  LoadingContainer,
  SafeHtml,
  SmoothImage,
} from "@/components/ui";
import { useQuery } from "@tanstack/react-query";
import useNewsCreateQO from "../hooks/useNewsCreateQO";
import NewsCategoryBadge from "./NewsCategoryBadge";
import Link from "next/link";

const LastNewsWidget = () => {
  const {
    data: news,
    isLoading,
    isError,
  } = useQuery(
    useNewsCreateQO({ page: 1, perPage: 1 }, { select: (data) => data.data[0] })
  );

  if (isLoading) {
    return <LoadingContainer containerHeight={300} />;
  }

  if (isError) {
    return <ErrorAxios />;
  }

  if (!news) {
    return null;
  }
  return (
    <div className="w-full bg-backgroundSecondary border border-outline rounded-xl">
      <div className="flex flex-col">
        <div className="relative h-[50px] rounded-t-xl border-b border-outline">
          <SmoothImage
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${news.imagePath[0]}`}
            alt={`Image for news: ${news.title}`}
            className="rounded-t-xl object-cover"
          />
          <div className="absolute inset-0 backdrop-blur-xs rounded-xl z-[1]" />

          <div className="absolute inset-0 z-[2] flex flex-col justify-center px-4">
            <p className="font-bold text-white">News Of The Day</p>
          </div>
        </div>

        <div className="p-4 flex flex-col gap-4">
          <Link
            href={`/news/${news.slug}`}
            className="line-clamp-2 font-medium hover:underline"
          >
            {news.title}
          </Link>
          <SafeHtml html={news.desc} className="line-clamp-4" />
          <div className="flex items-center gap-2">
            <DateDisplay date={news.dateCreated} withDateAgo={false} />
            <NewsCategoryBadge category={news.category} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastNewsWidget;
