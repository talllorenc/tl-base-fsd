import { News } from "@/features/news/pages";

export const metadata = {
  title: "News Page",
  description: "News Page",
};

export const dynamic = "force-dynamic";

const NewsPage = () => {
  return <News />;
};

export default NewsPage;
