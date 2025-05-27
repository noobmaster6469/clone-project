"use client";
import React, { useState } from "react";
import { user } from "@/constant/days";
import { Eye, EyeOff } from "lucide-react";

const AccountSetting = () => {
  const [seePass, setSeePass] = useState(false);
  const [seeConfirm, setSeeConfirm] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(true);
  return (
    <div className="right w-full rounded-lg border-1">
      <h1 className="text-2xl font-bold p-4 border-b">Account Settings</h1>

      <div>
        <form>
          <div className="flex flex-col md:flex-row flex-wrap">
            <div className="p-4 md:w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                defaultValue={""}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="p-4 md:w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                defaultValue={""}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap">
            <div className="p-4 md:w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                disabled
                type="email"
                defaultValue={user.email ? user.email : ""}
                className="w-full p-2 border bg-gray-100 border-gray-300 rounded-lg text-gray-500 cursor-not-allowed"
              />
            </div>
            <div className="p-4 md:w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                defaultValue={user.phone ? user.phone : ""}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap pb-4 mb-2 border-b">
            <div className="p-4 md:w-1/2 relative">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type={seePass ? "text" : "password"}
                defaultValue=""
                className="w-full p-2 pr-10 border border-gray-300 rounded-lg"
              />
              <div
                className="absolute right-6 top-[58%] -translate-y-1 cursor-pointer"
                onClick={() => setSeePass(!seePass)}
              >
                {seePass ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>

            <div className="p-4 md:w-1/2 relative">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type={seeConfirm ? "text" : "password"}
                defaultValue=""
                className="w-full p-2 pr-10 border border-gray-300 rounded-lg"
              />
              <div
                className="absolute right-6 top-[58%] -translate-y-1 cursor-pointer"
                onClick={() => setSeeConfirm(!seeConfirm)}
              >
                {seeConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>
          </div>

          <div className="p-4 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                id="sub"
                type="checkbox"
                checked={isSubscribed}
                onChange={() => setIsSubscribed(!isSubscribed)}
                className="w-4 h-4 accent-black rounded cursor-pointer"
              />
              <label htmlFor="sub" className="cursor-pointer">
                Subscribe to Newsletter
              </label>
            </div>
            <button
              type="submit"
              className="w-fit px-4 cursor-pointer bg-black text-white py-2 rounded-lg hover:bg-gray-600 transition duration-200"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountSetting;
