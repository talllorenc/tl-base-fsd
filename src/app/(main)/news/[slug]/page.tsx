import { NewsDetails } from "@/features/news/pages";

export const metadata = {
  title: "News Details Page",
  description: "News Details Page",
};

const NewsDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return <NewsDetails slug={slug} />;
};

export default NewsDetailsPage;
