import React from "react";
import { user } from "@/constant/days";

const PersonalInfo = () => {
  const capital = (str: string) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  return (
    <div className="right w-full rounded-lg border-1">
      <h1 className="text-2xl font-bold bg-[#f5f5f6] p-4">
        Personal Information
      </h1>

      <div>
        <form>
          <div className="flex flex-col md:flex-row flex-wrap">
            <div className="p-4 md:w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue={user.name ? user.name : ""}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="p-4 md:w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                defaultValue={user.email ? user.email : ""}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap">
            <div className="p-4 md:w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue={user.phone ? user.phone : ""}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="p-4 md:w-1/2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Date of Birth<span className="text-red-500">*</span>
              </label>
              <input
                disabled
                type="text"
                defaultValue={user.dob ? user.dob : ""}
                className="w-full p-2 border border-gray-300 rounded-lg text-gray-500"
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
  );
};

export default PersonalInfo;
