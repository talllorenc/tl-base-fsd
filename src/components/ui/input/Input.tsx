import { cn } from "@/utils/cn";
import { ElementType, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: ElementType;
  register?: UseFormRegisterReturn;
  error?: string;
  isPending?: boolean;
}

const Input = ({
  icon: Icon,
  className,
  register,
  error,
  isPending,
  ...props
}: IInputProps) => {
  return (
    <div className="relative flex items-center w-full">
      {Icon && (
        <Icon className="absolute left-3 text-foregroundSecondary" width={20} />
      )}
      <input
        disabled={isPending}
        {...register}
        className={cn(
          "w-full rounded-xl h-9 w-full pr-4 py-2 bg-tableHeader border outline-none hover:ring-2 hover:ring-cherry hover:border-transparent focus:ring-2 focus:ring-cherry focus:border-transparent transition placeholder:text-foregroundSecondary disabled:cursor-not-allowed disabled:opacity-50 disabled:focus:ring-0 disabled:ring-0",
          Icon ? "pl-10" : "pl-4",
          className,
          error ? "border-red-500" : "border-outline"
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
