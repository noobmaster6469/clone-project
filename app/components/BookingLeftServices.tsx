import React, { useRef } from "react";
import Carousel from "./Carousel";
import { servicesDescription } from "@/constant/days";
import Services from "./Services";

const BookingLeftServices = () => {
  const serviceRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const groupedServices = servicesDescription.reduce((groups, service) => {
    const type = service.type;
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(service);
    return groups;
  }, {} as Record<string, typeof servicesDescription>);

  const handleScrollTo = (type: string) => {
    const element = serviceRefs.current[type];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };
  return (
    <>
      <div className="pt-4 h-fit w-full xl:w-4/6">
        <h1 className="text-3xl font-bold mb-4">Select Services</h1>
        <div>
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
        </div>
      </div>
    </>
  );
};

export default BookingLeftServices;
