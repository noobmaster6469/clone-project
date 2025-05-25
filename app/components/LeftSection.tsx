"use client";
import { Menu, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import { services } from "@/constant/days";
import Services from "./Services";
import { servicesDescription } from "@/constant/days";
import Professionals from "./Professionals";
import { professionalsName } from "@/constant/days";

const LeftSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel pt-4 flex-6 mr-2 overflow-y-hidden">
      <div className=" bg-white font-semibold flex items-center justify-between gap-4 py-2 ">
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

        <div className="flex gap-2">
          <button onClick={() => scroll("left")}>
            <ChevronLeft className="cursor-pointer" />
          </button>
          <button onClick={() => scroll("right")}>
            <ChevronRight className="cursor-pointer" />
          </button>
        </div>
      </div>

      <div className="services mt-4 flex flex-col gap-6">
        {/* Services and other content */}
        {servicesDescription.map((service, idx: number) => (
          <div key={idx} className="">
            <Services props={service} />
          </div>
        ))}
      </div>

      <div className="professionals mt-4 mb-10">
        <h1 className="font-bold text-3xl border-b-2 pb-2 mb-8">
          Our Professionals
        </h1>
        <div className="grid grid-cols-4 gap-10">
          {professionalsName.map((name, idx: number) => (
            <Professionals key={idx} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
