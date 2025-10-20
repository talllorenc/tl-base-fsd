import { cn } from "@/utils/utils";
import { ElementType } from "react";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: ElementType;
}

const Input = ({ icon: Icon, className, ...props }: IInputProps) => {
  return (
    <div className="relative flex items-center">
      {Icon && (
        <Icon className="absolute left-3 text-foregroundSecondary" width={16} />
      )}
      <input
        className={cn(
          "rounded-xl h-9 w-full pr-4 py-2 bg-tableHeader border border-outline outline-none focus:ring-2 focus:ring-foreground focus:border-transparent transition placeholder:text-foregroundSecondary disabled:cursor-not-allowed disabled:opacity-50",
          Icon ? "pl-10" : "pl-4",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
