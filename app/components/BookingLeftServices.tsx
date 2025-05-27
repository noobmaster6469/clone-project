import React from "react";
import Carousel from "./Carousel";
import { servicesDescription } from "@/constant/days";
import Services from "./Services";

const BookingLeftServices = () => {
  const groupedServices = servicesDescription.reduce((groups, service) => {
    const type = service.type;
    if (!groups[type]) {
      groups[type] = [];
    }
    groups[type].push(service);
    return groups;
  }, {} as Record<string, typeof servicesDescription>);
  return (
    <>
      <div className="pt-4 h-fit w-full xl:w-4/6">
        <h1 className="text-3xl font-bold mb-4">Select Services</h1>
        <div>
          <div className="serviceDiv relative">
            <Carousel />
            <div className="services mt-4 flex flex-col gap-6">
              {/* Map over each group */}
              {Object.entries(groupedServices).map(([type, services]) => (
                <div key={type}>
                  {/* Heading for the group */}
                  <h2 className="text-xl font-bold mb-4 capitalize">{type}</h2>

                  {/* Map services of this type */}
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
