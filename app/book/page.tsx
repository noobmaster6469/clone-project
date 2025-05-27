import Link from "next/link";
import React from "react";

const Booking = () => {
  return (
    <>
      <h1 className="h-screen w-screen flex items-center justify-center text-3xl ">
        <Link
          className="hover:text-blue-500 hover:underline"
          href="/book/services"
        >
          Click me
        </Link>
      </h1>
    </>
  );
};

export default Booking;
