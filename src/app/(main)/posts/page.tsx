import { Posts } from '@/features/posts/pages'

export const metadata = {
  title: "Posts Page",
  description: "Posts Page",
};

export const dynamic = "force-dynamic";

const PostsPage = () => {
  return (
    <Posts/>
  )
}

export default PostsPage