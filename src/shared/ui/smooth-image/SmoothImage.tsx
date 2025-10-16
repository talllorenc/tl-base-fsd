"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/shared/lib/utils/utils";

interface SmoothImageProps extends ImageProps {
  containerHeight?: number;
}
const SmoothImage = ({ containerHeight = 300, ...props }: SmoothImageProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        !loaded ? "animate-pulse bg-backgroundSecondary" : "animate-none"
      )}
      style={{ height: containerHeight }}
    >
      <Image
        {...props}
        className={cn(
          "duration-700 ease-in-out transition-opacity",
          loaded ? "opacity-100" : "opacity-0",
          props.className
        )}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default SmoothImage;
