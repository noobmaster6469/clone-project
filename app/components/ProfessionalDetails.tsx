import React from "react";
import { user } from "@/constant/days";
import Image from "next/image";

const ProfessionalDetails = () => {
  return (
    <div className="bg-[#f8f9fa] p-6 rounded-md mb-6">
      <h1 className="mb-4 text-lg">Professional Details</h1>

      <div className="flex items-center gap-4">
        <Image
          className="rounded-md"
          src={user.url ? user.url : "/avatar.png"}
          alt="Avatar"
          width={90}
          height={90}
        />

        <div className="font-bold text-[#747579]">
          <h1 className="text-black">{user.name}</h1>
          <p className="font-semibold">Address: {user.address}</p>
          <p className="font-semibold">Phoe: {user.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDetails;
