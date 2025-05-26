import React from "react";

import { user } from "@/constant/days";
import { Bookmark, BookmarkCheck, Lock, Settings } from "lucide-react";
import Link from "next/link";

const UserProfile = () => {
  const capital = (str: string) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <div className="px-2 sm:px-[7vw] flex gap-10">
      <div className="card-left w-1/4 h-fit bg-[#f5f5f6] rounded-2xl  py-4">
        <div className="top px-4 py-2 flex items-center  gap-4">
          <div className="text-2xl font-bold w-12 h-12 flex items-center justify-center bg-[#feeef0] rounded-full">
            <span>{user.name ? user.name[0] : "B"}</span>
          </div>
          <h1 className="text-xl font-bold">{user.name}</h1>
        </div>

        <div className="bottom border-t border-gray-300 mt-4">
          <ul className="text-xl">
            <Link href="/profile">
              <li className="flex items-center gap-4 cursor-pointer px-8 py-4 hover:bg-gray-300">
                <BookmarkCheck />
                My Profile
              </li>
            </Link>
            <li className="flex items-center gap-4 cursor-pointer px-8 py-4 hover:bg-gray-300">
              <Bookmark />
              My bookings
            </li>
            <li className="flex items-center gap-4 cursor-pointer px-8 py-4 hover:bg-gray-300">
              <Settings />
              Account Settings
            </li>
            <li className="flex items-center gap-4 cursor-pointer px-8 py-4 hover:bg-gray-300">
              <Lock />
              Security
            </li>
          </ul>
        </div>
      </div>

      <div className="right w-3/4 rounded-2xl border-1">
        <h1 className="text-2xl font-bold bg-[#f5f5f6] p-4">
          Personal Information
        </h1>

        <div>
          <form>
            <div className="flex flex-wrap">
              <div className="p-4 w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Full Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue={user.name ? user.name : ""}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="p-4 w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue={user.email ? user.email : ""}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="p-4 w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  defaultValue={user.phone ? user.phone : ""}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="p-4 w-1/2">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  defaultValue={user.dob ? user.dob : ""}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            <div className="p-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Select Gender<span className="text-red-500">*</span>
              </label>
              <div className="flex gap-4">
                {["Male", "Female", "Other"].map((gender) => (
                  <label
                    key={gender}
                    className="flex items-center gap-1 text-sm text-gray-800"
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      defaultChecked={
                        capital(user.gender ? user.gender : "") == gender
                      }
                      className="accent-pink-500"
                    />
                    {gender}
                  </label>
                ))}
              </div>
            </div>

            <div className="p-4">
              <label>Address</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded-lg"
                defaultValue={user.address ? user.address : ""}
              ></textarea>
            </div>

            <div className="p-4 text-end">
              <button
                type="submit"
                className="w-fit px-4 cursor-pointer bg-black text-white py-2 rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
