import { PostDetailContent } from "../components";

interface INewsDetailPageProps {
  slug: string;
}

const NewsDetails = ({ slug }: INewsDetailPageProps) => {
  return <PostDetailContent slug={slug} />;
};

export default NewsDetails;
