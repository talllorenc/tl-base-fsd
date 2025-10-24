interface INewsDetailPageProps {
  slug: string;
}

const NewsDetails = ({ slug }: INewsDetailPageProps) => {
  return <p>{slug}</p>;
};

export default NewsDetails;
