import { ChevronLeft, ChevronRight, Menu } from "lucide-react";
import React, { useRef } from "react";
import { services } from "@/constant/days";

const Carousel = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <div className="top sticky z-9 top-12 bg-white font-semibold flex items-center justify-between gap-4 py-2">
      <div className="flex-none">
        <Menu className="cursor-pointer" strokeWidth={2} />
      </div>

      <div
        ref={scrollRef}
        className="flex-1 flex gap-4 items-center overflow-x-auto no-scrollbar px-2"
      >
        {services.map((service: string, idx: number) => (
          <div
            key={idx}
            className="bg-[#e9ecef] hover:bg-gray-300 cursor-pointer rounded-full py-2 px-3 font-semi bold whitespace-nowrap min-w-[200px] truncate active:scale-95"
          >
            {service}
          </div>
        ))}
      </div>

      <div className="carousel flex gap-2">
        <button onClick={() => scroll("left")}>
          <ChevronLeft className="cursor-pointer" />
        </button>
        <button onClick={() => scroll("right")}>
          <ChevronRight className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
