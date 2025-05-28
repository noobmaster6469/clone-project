import React from "react";
import { foodItems } from "@/constant/dateTimeAndFood";
import Image from "next/image";
import { Plus } from "lucide-react";

const FoodAndBeverages = () => {
  return (
    <div className="bg-[#f8f9fa] p-6 rounded-xl mb-4">
      <div className="font-semibold text-xl">
        <span>Food and Beverages(Optional)</span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-4">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 h-[250px] rounded-md border-2 overflow-hidden"
            >
              <Image
                className="h-[120px] w-full object-cover"
                src={item.url}
                alt={item.name}
                width={100}
                height={100}
              />
              <div className="px-2 flex flex-col">
                <div className="mb-2 text-[18px] font-semibold h-[70px] overflow-y-hidden text-overflow-ellipsis">
                  {item.name}
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex items-end gap-2 ">
                    <span>{item.offerPrice}</span>
                    <span className="text-sm mb-[2px] text-gray-500 line-through">
                      {item.price}
                    </span>
                  </div>
                  <div className="bg-black p-2 rounded-full cursor-pointer hover:bg-gray-800 active:scale-95">
                    <Plus stroke="#fff" size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodAndBeverages;
