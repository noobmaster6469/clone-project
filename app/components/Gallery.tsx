import Image from "next/image";
import React, { useState } from "react";
import { Fullscreen } from "lucide-react";

const images = [
  { src: "/image1.jpg", alt: "Left large gallery image" },
  { src: "/image2.jpg", alt: "Top right image" },
  { src: "/image3.jpg", alt: "Bottom left right-side image" },
  { src: "/image4.jpg", alt: "Bottom right right-side image" },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  const renderImage = (src: string, alt: string, className?: string) => (
    <div
      className={`relative cursor-pointer group rounded-lg overflow-hidden ${className}`}
      onClick={() => openModal(src)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
      />
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-[#00000090] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <Fullscreen className="text-white w-10 h-10" />
      </div>
    </div>
  );

  return (
    <>
      <div className="flex h-[500px] gap-4">
        {/* Left image */}
        <div className="w-1/2 h-full relative">
          {renderImage(images[0].src, images[0].alt, "w-full h-full")}
        </div>

        {/* Right stacked images */}
        <div className="w-1/2 flex flex-col gap-4">
          <div className="h-1/2 relative">
            {renderImage(images[1].src, images[1].alt, "w-full h-full")}
          </div>
          <div className="h-1/2 flex gap-4">
            <div className="w-1/2 h-full relative">
              {renderImage(images[2].src, images[2].alt, "w-full h-full")}
            </div>
            <div className="w-1/2 h-full relative">
              {renderImage(images[3].src, images[3].alt, "w-full h-full")}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
        >
          <div className="relative w-[80vw] h-[80vh]">
            <Image
              src={selectedImage}
              alt="Enlarged image"
              fill
              className="object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
