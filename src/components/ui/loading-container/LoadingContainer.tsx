import React from "react";
import { cn } from "@/utils/utils";

interface ILoadingContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  containerHeight?: number;
  text?: string;
}

export const LoadingContainer = ({
  containerHeight = 300,
  text,
  ...props
}: ILoadingContainerProps) => {
  return (
    <div
      className={cn("animate-pulse bg-backgroundSecondary border border-outline rounded-xl", props.className)}
      style={{ height: containerHeight }}
    >
      {text && <p>{text}</p>}
    </div>
  );
};