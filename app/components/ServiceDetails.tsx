import Image from "next/image";
import React from "react";

const ServiceDetails = () => {
  return (
    <div className="border-b mb-6">
      <h1 className="mb-4 text-lg sm:p-0 px-6">Service Details</h1>
      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4 ">
        <Image src="/shop1.jpg" alt="Service image" width={160} height={160} />
        <div className="flex flex-col items-center text-center sm:items-start gap-1.5 text-[#747579] font-semibold">
          <h1 className="font-bold ">Men Haircut</h1>
          <div className="flex items-end gap-2">
            <span> 1 hour</span>
            <p className="h-1 w-1 bg-gray-500 rounded-full mb-1.5"></p>
            <span>Male only</span>
          </div>

          <span className="font-bold">
            <span className="text-xl text-black">$154</span>.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
