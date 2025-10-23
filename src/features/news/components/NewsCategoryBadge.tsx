import { cn } from "@/utils/cn";
import { INewsCategoryBadgeProps } from "../types";
import { categoryColors } from "../constants";

const NewsCategoryBadge = ({ category }: INewsCategoryBadgeProps) => {
  return (
    <div
      className={cn(
        "w-fit shrink-0 h-7 px-4 text-xs rounded-full flex items-center font-medium",
        categoryColors[category]
      )}
    >
      {category}
    </div>
  );
};

export default NewsCategoryBadge;