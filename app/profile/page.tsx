import React from "react";
import Navbar from "../components/Navbar";
import { user } from "@/constant/days";
import UserProfile from "../components/UserProfile";

const Profile = () => {
  return (
    <div>
      <Navbar user={user} />
      <h1 className="mt-28">
        <UserProfile />
      </h1>
    </div>
  );
};

export default Profile;
