import { Loader2 } from "lucide-react";
import { cn } from "@/utils/cn";

interface ISpinnerProps {
  size?: number | string;
  color?: string;
  className?: string;
}
const Spinner = ({ size = 24, color, className }: ISpinnerProps) => {
  return (
    <div className={cn("flex items-center justify-center w-fit", className)}>
      <Loader2
        className="animate-spin text-cherry"
        style={{
          width: typeof size === "number" ? `${size}px` : size,
          height: typeof size === "number" ? `${size}px` : size,
          color,
        }}
      />
    </div>
  );
};

export default Spinner;