import React from "react";
import Navbar from "../components/Navbar";
import { user } from "@/constant/days";
import UserProfile from "../components/UserProfile";
import Foot from "../components/Foot";

const Profile = () => {
  return (
    <div className="">
      <Navbar user={user} />
      <div className="pt-20 min-h-screen">
        <UserProfile />
      </div>
      <Foot />
    </div>
  );
};

export default Profile;
