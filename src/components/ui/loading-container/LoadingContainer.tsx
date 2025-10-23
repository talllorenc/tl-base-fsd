import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface ILoadingContainerProps extends HTMLAttributes<HTMLDivElement> {
  containerHeight?: number;
  text?: string;
}

const LoadingContainer = ({
  containerHeight = 300,
  text,
  ...props
}: ILoadingContainerProps) => {
  return (
    <div
      className={cn(
        "animate-pulse bg-backgroundSecondary border border-outline rounded-xl",
        props.className
      )}
      style={{ height: containerHeight }}
    >
      {text && <p>{text}</p>}
    </div>
  );
};

export default LoadingContainer;