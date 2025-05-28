import React from "react";
import ProfessionalDetails from "./ProfessionalDetails";
import ServiceDetails from "./ServiceDetails";
import { user } from "@/constant/days";

const BookingLeftReview = () => {
  return (
    <div className="pt-4 h-fit w-full xl:w-4/6">
      <h1 className="text-3xl font-bold mb-6">Review & Confirm</h1>
      <ProfessionalDetails />
      <ServiceDetails />
      <div className="bg-[#f8f9fa] p-6 rounded-md mb-6 flex gap-4">
        <div className="left w-1/2 ">
          <h1 className="mb-4 text-md font-bold">Details:</h1>
          <div className="flex flex-col">
            <span>
              <span className="text-[#7d879c]">Client: </span>
              {user.name}
            </span>
            <span>
              <span className="text-[#7d879c]">Address: </span> {user.address}
            </span>
            <span>
              <span className="text-[#7d879c]">Phone: </span> {user.phone}
            </span>
          </div>
        </div>
        <div className="right w-1/2">
          <h1 className="mb-4 text-md font-bold">Payment Method:</h1>
          <div className="flex flex-col">
            <span>
              <span className="text-[#7d879c]">Credit Card: </span> **** ****
              **** 5300
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingLeftReview;
