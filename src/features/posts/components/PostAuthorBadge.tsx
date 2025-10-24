interface PostAuthorBadgeProps {
  firstName: string;
  lastName: string;
}

const PostAuthorBadge = ({ firstName, lastName }: PostAuthorBadgeProps) => {
  return (
    <div>
      <span className="font-bold text-blue-400">
        {firstName} {lastName}
      </span>
    </div>
  );
};

export default PostAuthorBadge;
