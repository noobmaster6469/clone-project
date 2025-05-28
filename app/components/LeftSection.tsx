"use client";

import React, { useRef } from "react";
import { servicesDescription, professionalsName } from "@/constant/days";
import Services from "./Services";
import Professionals from "./Professionals";
import Reviews from "./Reviews";
import Gallery from "./Gallery";
import Map from "./Map";
import About from "./About";
import Carousel from "./Carousel";

const LeftSection: React.FC = () => {
  const groupedServices = servicesDescription.reduce((groups, service) => {
    const type = service.type;
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(service);
    return groups;
  }, {} as Record<string, typeof servicesDescription>);

  const serviceRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleScrollTo = (type: string) => {
    const element = serviceRefs.current[type];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div className="pt-4 h-fit w-full xl:w-4/6">
      {/* Sticky only within Services Section */}
      <div className="serviceDiv relative">
        <Carousel onSelectService={handleScrollTo} />
        <div className="services mt-4 flex flex-col gap-6">
          {Object.entries(groupedServices).map(([type, services]) => (
            <div
              key={type}
              ref={(el) => {
                serviceRefs.current[type] = el;
              }}
            >
              <h2 className="text-2xl font-bold mb-4 capitalize">{type}</h2>
              {services.map((service, idx) => (
                <Services key={idx} props={service} />
              ))}
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
