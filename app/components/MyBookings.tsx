"use client";
import React, { useState } from "react";
import { Briefcase, XCircle, CheckCircle } from "lucide-react";
import UpcomingBooking from "./UpcomingBooking";
import CanceledBooking from "./CanceledBooking";
import CompletedBooking from "./CompletedBooking";

const tabs = [
  {
    label: "Upcoming Booking",
    icon: <Briefcase />,
    component: <UpcomingBooking />,
  },
  {
    label: "Canceled Booking",
    icon: <XCircle />,
    component: <CanceledBooking />,
  },
  {
    label: "Completed Booking",
    icon: <CheckCircle />,
    component: <CompletedBooking />,
  },
];

const MyBookings = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="w-full rounded-lg border">
        <h1 className="text-2xl font-bold p-4 border-b">My Bookings</h1>

        {/* Tabs */}
        <div className="border-b">
          <ul className="flex flex-wrap justify-center text-md xl:text-lg text-black font-semibold">
            {tabs.map((tab, index) => (
              <li
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full md:flex-1 flex items-center justify-center gap-1 px-4 py-2 cursor-pointer border-b-2 transition-colors ${
                  activeTab === index
                    ? "border-black"
                    : "border-transparent hover:border-black"
                }`}
              >
                {tab.icon}
                {tab.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="p-4">{tabs[activeTab].component}</div>
      </div>
    </>
  );
};

export default MyBookings;
