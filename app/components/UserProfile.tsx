"use client";
import React, { useState } from "react";
import { user } from "@/constant/days";
import { Bookmark, BookmarkCheck, Lock, Settings } from "lucide-react";
import PersonalInfo from "./PersonalInfo";
import MyBookings from "./MyBookings";
import AccountSetting from "./AccountSetting";
import Security from "./Security";

const tabs = [
  { label: "My Profile", icon: <BookmarkCheck />, component: <PersonalInfo /> },
  { label: "My Bookings", icon: <Bookmark />, component: <MyBookings /> },
  {
    label: "Account Settings",
    icon: <Settings />,
    component: <AccountSetting />,
  },
  { label: "Security", icon: <Lock />, component: <Security /> },
];

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="">
      <div className="px-2 py-8 sm:px-[7vw] flex flex-col lg:flex-row gap-10">
        <div className="card-left mb-4 lg:w-1/4 h-fit bg-[#f5f5f6] rounded-2xl py-4">
          <div className="top px-4 py-2 flex items-center gap-2 xl:gap-4">
            <div className="text-2xl font-bold xl:w-12 xl:h-12 w-11 h-11 flex items-center justify-center bg-[#feeef0] rounded-full">
              <span>{user.name ? user.name[0] : "B"}</span>
            </div>
            <h1 className="text-lg xl:text-xl font-bold">{user.name}</h1>
          </div>

          <div className="bottom border-t border-gray-300 mt-4">
            <ul className="text-lg xl:text-xl">
              {tabs.map((tab, index) => (
                <li
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 xl:gap-4 cursor-pointer xl:px-8 xl:py-4 px-6 py-2 
                  ${
                    activeTab === index
                      ? "bg-gray-300 font-semibold"
                      : "hover:bg-gray-200"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right side */}
        <div className="lg:w-3/4">{tabs[activeTab].component}</div>
      </div>
    </div>
  );
};

export default UserProfile;
