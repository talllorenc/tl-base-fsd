import { NewsDetailContent } from "../components";

interface INewsDetailPageProps {
  slug: string;
}

const NewsDetails = ({ slug }: INewsDetailPageProps) => {
  return <NewsDetailContent slug={slug} />;
};

export default NewsDetails;
