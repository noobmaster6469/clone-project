import React, { useState } from "react";
import { selectTime } from "@/constant/dateTimeAndFood";

const TimeSection = () => {
  const [active, setActive] = useState(selectTime[0]);
  return (
    <div className="mb-4">
      <span className="font-semibold">Time</span>
      <div className="flex items-center flex-wrap gap-2 mt-4">
        {selectTime.map((item, index) => (
          <div
            key={index}
            className={`px-8 text-gray-700 py-2 border-2 rounded-md cursor-pointer hover:border-2 hover:border-black hover:text-black active:scale-95  ${
              active === item ? "border-black" : ""
            }`}
            onClick={() => setActive(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSection;
