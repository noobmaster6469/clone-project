"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { user } from "@/constant/days";
// import { useSelector } from "react-redux";
// import { RootState } from "@/lib/redux/store";

const Booking = () => {
  // const user = useSelector((state: RootState) => state.user);

  return (
    <div>
      <Navbar user={user} />
      <h1 className="mt-12">This is booking page</h1>
    </div>
  );
};

export default Booking;
