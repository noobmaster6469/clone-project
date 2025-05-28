import { Plus } from "lucide-react";
import React from "react";
import { ServicesDescription } from "@/constant/days";

const Services: React.FC<{ props: ServicesDescription }> = ({ props }) => {
  return (
    <div className="mb-4 flex items-center gap-10 justify-between border-1 rounded-sm p-6 text-gray-600">
      <div className="left">
        <span className="font-semibold text-xl text-black">{props.name}</span>
        <div className="flex items-center gap-1 mt-1">
          <span>{props.time}</span>
          <div className="h-1 w-1 rounded-full bg-gray-400 mt-1.5"></div>
          <span>{props.gender}</span>
        </div>
        <span>{props.description}</span>
        <div className="flex items-center  gap-2 mt-1">
          <span className="text-lg text-black">{props.currentPrice}</span>
          <span className="line-through text-gray-500 text-sm">
            {props.originalPrice}
          </span>
          {props.discount && (
            <span className="text-green-700 bg-[#e8f3ee] px-2 py-1 rounded-xl text-[10px] font-bold">
              Discount available
            </span>
          )}
        </div>
      </div>
      <div className="right flex">
        <div className="add bg-[#e9ecef] h-fit hover:bg-gray-300 cursor-pointer p-2 rounded-md">
          <Plus size={14} />
        </div>
      </div>
    </div>
  );
};

export default Services;
