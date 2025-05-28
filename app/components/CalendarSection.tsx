import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { selectDate } from "@/constant/dateTimeAndFood";
import React, { useState } from "react";

const CalendarSection = () => {
  const [active, setActive] = useState<string>(selectDate[2].day);
  return (
    <div className="mb-4">
      <span className="font-semibold">Calendar</span>
      <div className="w-full mt-4">
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {selectDate.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-1/3 sm:basis-1/4 md:basis-1/6 xl:basis-1/7"
                >
                  <div className="p-1 cursor-pointer">
                    <Card
                      className={`text-[#505e7a] border-2 border-transparent hover:border-[#505e7a] rounded-lg transition-all duration-200 ease-in-out active:scale-95 ${
                        active === item.day ? "bg-black text-white" : ""
                      }`}
                      onClick={() => setActive(item.day)}
                    >
                      <CardContent className="flex items-center justify-center h-5">
                        <div className="text-lg  flex flex-col items-center justify-center">
                          <span>{item.day}</span>
                          <span>{item.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;
