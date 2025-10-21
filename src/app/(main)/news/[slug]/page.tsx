import NewsDetails from "./_components/NewsDetails";

export const metadata = {
  title: "News Details Page",
  description: "News Details Page",
};

const NewsDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const resolvedParams = await params;
  return <NewsDetails slug={resolvedParams.slug} />;
};

export default NewsDetailPage;
