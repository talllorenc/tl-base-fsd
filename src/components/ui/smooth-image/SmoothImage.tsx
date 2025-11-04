"use client";

import { cn } from "@/utils/cn";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

const SmoothImage = ({ alt, ...props }: ImageProps) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const finalSrc =
    typeof props.src === "string" && !props.src.startsWith("http")
      ? `${process.env.NEXT_PUBLIC_SERVER_URL}${props.src}`
      : props.src;

  return (
    <Image
      fill
      {...props}
      alt={alt}
      src={finalSrc}
      sizes="100vh"
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
