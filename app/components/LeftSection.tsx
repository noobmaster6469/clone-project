"use client";
import { Menu, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import {
  services,
  servicesDescription,
  professionalsName,
} from "@/constant/days";
import Services from "./Services";
import Professionals from "./Professionals";
import Reviews from "./Reviews";
import Gallery from "./Gallery";
import Map from "./Map";
import About from "./About";

const LeftSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-4 h-fit w-full xl:w-4/6">
      {/* Sticky only within Services Section */}
      <div className="relative">
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

        <div className="services mt-4 flex flex-col gap-6">
          {servicesDescription.map((service, idx: number) => (
            <div key={idx}>
              <Services props={service} />
            </div>
          ))}
        </div>
      </div>

      <div className="professionals mt-4 mb-10">
        <h1 className="pl-4 md:pl-0 font-bold text-xl md:text-3xl border-b-2 pb-2 mb-8">
          Our Professionals
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-10">
          {professionalsName.map((name, idx: number) => (
            <Professionals key={idx} name={name} />
          ))}
        </div>
      </div>

      <div className="review mt-4 ">
        <h1 className="pl-4 md:pl-0 font-bold text-xl md:text-3xl border-b-2 pb-2 mb-8">
          Customer Review
        </h1>
        <Reviews />
      </div>

      <div className="gallery mt-4 mb-10">
        <h1 className="pl-4 md:pl-0 font-bold text-xl md:text-3xl border-b-2 pb-2 mb-8">
          Gallery
        </h1>
        <Gallery />
      </div>

      <div className="map mt-4 mb-10">
        <h1 className="pl-4 md:pl-0 font-bold text-xl md:text-3xl border-b-2 pb-2 mb-8">
          Contact Information
        </h1>
        <Map />
      </div>

      <div className="about mt-4 mb-10">
        <h1 className="pl-4 font-bold text-xl md:text-3xl border-b-2 pb-2 mb-8">
          About This Salon
        </h1>
        <About />
      </div>
    </div>
  );
};

export default LeftSection;
