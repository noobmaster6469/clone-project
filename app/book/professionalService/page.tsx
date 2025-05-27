"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { user } from "@/constant/days";
import Foot from "../../components/Foot";
import BookingRight from "@/app/components/BookingRight";
import BreadCrums from "@/app/components/BreadCrums";
import BookingLeftProfessionalService from "@/app/components/BookingLeftProfessionalService";

const ProfessionalService = () => {
  const [next, setNext] = useState("");

  useEffect(() => {
    setNext("calendar");
  }, []);
  return (
    <div>
      <div className="min-h-screen">
        <Navbar user={user} />

        <div className="mt-16 sm:px-[7vw] px-2">
          <BreadCrums next={next} />
        </div>
        <div className="sm:px-[7vw] px-2 gap-4 xl:flex mb-10">
          <BookingLeftProfessionalService />
          <BookingRight next={next} />
        </div>
      </div>
      <Foot />
    </div>
  );
};

export default ProfessionalService;
