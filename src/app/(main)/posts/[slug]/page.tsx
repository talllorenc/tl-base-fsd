import { PostDetails } from "@/features/posts/pages";

export const metadata = {
  title: "Post Details Page",
  description: "Post Details Page",
};

const PostDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return <PostDetails slug={slug} />;
};

export default PostDetailsPage;
