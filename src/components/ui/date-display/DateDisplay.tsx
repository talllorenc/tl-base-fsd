import { cn } from "@/utils/utils";
import { Calendar } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

type DateDisplayProps = {
  className?: string;
  date: string | Date | number;
  withStartDate?: boolean;
  withDateAgo?: boolean;
  withIcon?: boolean;
};

const DateDisplay = ({
  date,
  className,
  withStartDate = true,
  withDateAgo = true,
  withIcon = true,
}: DateDisplayProps) => {
  const formatted = formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });

  return (
    <div
      className={cn(
        "flex items-center gap-1 text-sm text-foregroundSecondary whitespace-nowrap font-medium",
        className
      )}
    >
      {withIcon && <Calendar size={14} />}
      {withStartDate && (
        <span>{format(new Date(date), "dd MMM yyyy", { locale: enUS })}</span>
      )}
      {withStartDate && withDateAgo && <span> - </span>}
      {withDateAgo && <span>{formatted}</span>}
    </div>
  );
};

export default DateDisplay;
