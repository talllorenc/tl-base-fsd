import { ElementType } from "react";
import { LayoutList } from "lucide-react";

interface IEmptyDataProps {
  text?: string;
  icon?: ElementType;
}

const EmptyData = ({
  text = "No data",
  icon: Icon = LayoutList,
}: IEmptyDataProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <Icon className="text-foreground w-12 h-12"/>
      <h3 className="text-foreground">{text}</h3>
    </div>
  );
};

export default EmptyData;