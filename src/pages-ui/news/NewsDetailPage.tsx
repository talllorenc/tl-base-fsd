import { NewsDetailContent } from "@/entities/news";

interface INewsDetailPageProps {
  slug: string;
}

const NewsDetailPage = ({ slug }: INewsDetailPageProps) => {
  return <NewsDetailContent slug={slug} />;
};

export default NewsDetailPage;
