import NewsDetailPage from "@/pages-ui/news/NewsDetailPage";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const resolvedParams = await params;
  return <NewsDetailPage slug={resolvedParams.slug} />;
};

export default Page;
