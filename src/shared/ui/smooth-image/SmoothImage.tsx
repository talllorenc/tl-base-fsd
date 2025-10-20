"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/shared/lib/utils/utils";

const SmoothImage = ({ ...props }: ImageProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <Image
      fill
      sizes="100vh"
      {...props}
      className={cn(
        "duration-700 ease-in-out transition-opacity",
        loaded ? "opacity-100" : "opacity-0",
        props.className
      )}
      onLoad={() => setLoaded(true)}
    />
  );
};

export default SmoothImage;
