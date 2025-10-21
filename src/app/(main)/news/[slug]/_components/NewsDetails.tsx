import NewsDetailContent from "@/features/news/components/NewsDetailContent";

const NewsDetails = ({ slug }: { slug: string }) => {
  return <NewsDetailContent slug={slug} />;
};

export default NewsDetails;
