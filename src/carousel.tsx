// import React from "react";
import { Carousel } from "@material-tailwind/react";

export function CarouselD({ imageUrls }: { imageUrls: string[] }) {
  return (
    <Carousel
      className="rounded-xl"
    navigation={({ setActiveIndex, activeIndex, length }: { setActiveIndex: (index: number) => void, activeIndex: number, length: number }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
    {imageUrls.map((imageUrl: string, index: number) => (
        <img
          key={index}
          src={imageUrl}
          alt={`image ${index + 1}`}
          className="h-full w-full object-cover"
        />
      ))}
    </Carousel>
  );
}

export default CarouselD