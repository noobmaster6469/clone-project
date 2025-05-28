import React from "react";
import { Professional } from "@/constant/professionals";
import Image from "next/image";
import { Star } from "lucide-react";

const ProfessionalsCard = ({
  professional,
  isActive,
  onClick,
}: {
  professional: Professional;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div onClick={onClick}>
      <div
        className={`flex flex-col justify-center items-center gap-4 h-60 w-60 rounded-xl p-4 bg-white cursor-pointer active:scale-95 border transition-shadow duration-200 ease-in-out
    ${
      isActive
        ? "border-[#38a69e] shadow-[0_0_8px_2px_#38a69e]"
        : "border-gray-200 hover:border-[#38a69e] hover:shadow-[0_0_8px_2px_#38a69e]"
    }`}
      >
        <div>
          <Image
            src={`/${professional.url}`}
            alt={professional.name}
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
          />
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-lg font-semibold">{professional.name}</h2>
          <p className="text-sm text-gray-600">for {professional.speciality}</p>
        </div>
        <div className="flex items-center justify-center gap-1 text-[#ffc107]">
          <Star fill="#ffc107" />
          <Star fill="#ffc107" />
          <Star fill="#ffc107" />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsCard;
