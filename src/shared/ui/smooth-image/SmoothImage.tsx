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
      className="relative overflow-hidden"
      style={{ height: containerHeight }}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-backgroundSecondary animate-pulse transition-all rounded-xl" />
      )}

      <Image
        {...props}
        onLoad={() => setLoaded(true)}
        className={cn(
          "duration-700 ease-in-out transition-opacity",
          loaded ? "opacity-100" : "opacity-0",
          props.className
        )}
      />
    </div>
  );
};

export default SmoothImage;
