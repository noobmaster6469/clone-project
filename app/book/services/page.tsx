"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { user } from "@/constant/days";
import Foot from "../../components/Foot";

import BookingLeftServices from "@/app/components/BookingLeftServices";
import BookingRight from "@/app/components/BookingRight";
import BreadCrums from "@/app/components/BreadCrums";

const BookingInside = () => {
  const [next, setNext] = useState("");

  useEffect(() => {
    setNext("professionals");
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <Navbar user={user} />

        <div className="mt-16 sm:px-[7vw] px-2">
          <BreadCrums next={next} />
        </div>
        <div className="sm:px-[7vw] px-2 gap-4 xl:flex mb-10">
          <BookingLeftServices />
          <BookingRight next={next} />
        </div>
      </div>
      <Foot />
    </>
  );
};

export default BookingInside;
