"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});
import "yet-another-react-lightbox/styles.css";
import SmoothImage from "../smooth-image/SmoothImage";

interface IImage {
  src: string;
  alt: string;
}

interface ILightboxGalleryProps {
  images: IImage[];
}

const LightboxGallery = ({ images }: ILightboxGalleryProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="relative h-[200px] rounded-xl overflow-hidden hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          >
            <SmoothImage
              src={img.src}
              alt={img.alt || ""}
              className="rounded-xl object-cover"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img) => ({ src: img.src }))}
      />
    </>
  );
};

export default LightboxGallery;
