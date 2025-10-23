import { cn } from "@/utils/cn";
import { statusConfig } from "../constants";
import { IUserVerifiedBadgeProps } from "../types";

const UserVerifiedBadge = ({ isVerified }: IUserVerifiedBadgeProps) => {
  const {
    icon: Icon,
    label,
    color,
  } = statusConfig[isVerified ? "VERIFIED" : "UNVERIFIED"];

  return (
    <div
      className={cn(
        "w-fit shrink-0 h-7 px-4 text-xs rounded-full flex items-center gap-1",
        color
      )}
    >
      <Icon size={16} className="shrink-0" />
      <span className="uppercase font-medium">{label}</span>
    </div>
  );
};

export default UserVerifiedBadge;
