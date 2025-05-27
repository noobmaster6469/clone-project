import React, { useState } from "react";
import { professionals } from "@/constant/professionals";
import ProfessionalsCard from "./ProfessionalsCard";

const BookingLeftProfessionals = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="pt-4 h-fit w-full xl:w-4/6">
      <h1 className="text-3xl font-bold mb-4">Select Professional</h1>
      <div className="flex items-center justify-center">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionals.map((professional, idx) => (
            <ProfessionalsCard
              key={idx}
              professional={professional}
              isActive={activeIndex === idx}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingLeftProfessionals;
