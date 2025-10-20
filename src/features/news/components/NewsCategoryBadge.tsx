import { categoryColors } from "../types/constants";
import { INewsCategoryBadgeProps } from "../types/types";
import { cn } from "@/utils/utils";

const NewsCategoryBadge = ({ category }: INewsCategoryBadgeProps) => {
  return (
    <div
      className={cn(
        "w-fit shrink-0 py-1 px-2 text-xs rounded-full font-medium",
        categoryColors[category]
      )}
    >
      {category}
    </div>
  );
};

export default NewsCategoryBadge;
