import { roleConfig } from "../constants";
import { cn } from "@/utils/cn";

interface IUserRoleBadgeProps {
  role: "USER" | "ADMIN" | "TESTER";
  className?: string;
}

const UserRoleBadge = ({ role, className }: IUserRoleBadgeProps) => {
  const { icon: Icon, label, color } = roleConfig[role];
  return (
    <div
      className={cn(
        "w-fit shrink-0 h-7 px-4 text-xs rounded-full flex items-center gap-1",
        className,
        color
      )}
    >
      <Icon size={16} className="shrink-0" />
      <span className="uppercase font-medium">{label}</span>
    </div>
  );
};

export default UserRoleBadge;
