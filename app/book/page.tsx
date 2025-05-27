"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { user } from "@/constant/days";
import Foot from "../components/Foot";
// import { useSelector } from "react-redux";
// import { RootState } from "@/lib/redux/store";

const Booking = () => {
  // const user = useSelector((state: RootState) => state.user);

  return (
    <>
      <div className="min-h-screen bg-red-400">
        <Navbar user={user} />
        <h1 className="mt-12">This is booking page</h1>
      </div>
      <Foot />
    </>
  );
};

export default Booking;
