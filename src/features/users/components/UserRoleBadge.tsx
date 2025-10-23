import { roleConfig } from "../constants";
import { IUserRoleBadgeProps } from "../types";
import { cn } from "@/utils/cn";

const UserRoleBadge = ({ role }: IUserRoleBadgeProps) => {
  const { icon: Icon, label, color } = roleConfig[role];
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

export default UserRoleBadge;
