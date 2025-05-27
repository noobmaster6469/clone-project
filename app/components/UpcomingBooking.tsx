import { BookmarkCheck } from "lucide-react";
import Link from "next/link";
import React from "react";
import { bookings } from "@/constant/days";

const UpcomingBooking = () => {
  if (bookings.length === 0) {
    return (
      <div className="p-8">
        <p className="text-sm font-bold mb-4">
          Looks like you have never made an Appointment
        </p>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">
            When you book your services will be shown here.
          </h1>
          <Link href="/">
            <button className="bg-black w-fit text-lg md:text-md md:px-4 md:py-2 px-2 py-1 text-white rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
              Start booking Now
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold">Upcoming booking ({bookings.length})</h1>
      {bookings.map((booking, index) => (
        <div key={index} className="table w-full rounded-lg border-1">
          <div className="bg-[#f5f5f6] gap-2 p-4 px-8 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="left flex items-center gap-6">
              <BookmarkCheck />
              <div>
                <h1 className="font-bold">{booking.title}</h1>
                <div className="text-xs flex flex-wrap items-center gap-1 text-gray-500">
                  Booking ID: {booking.bookingId}
                  <div className="h-1 w-1 rounded-full bg-gray-500"></div>
                  <span>{booking.classType}</span>
                </div>
              </div>
            </div>

            <div className="right">
              <button className="bg-black text-sm md:text-md md:px-4 md:py-2 px-2 py-1 text-white rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
                Manage Booking
              </button>
            </div>
          </div>

          <div className="bottom p-4 flex flex-wrap items-center justify-between">
            <div className="flex flex-col gap-1 w-full sm:flex-1">
              <p>Booking Date</p>
              <p className="font-bold text-md">{booking.bookingDate}</p>
            </div>
            <div className="flex flex-col gap-1 w-full sm:flex-1">
              <p>Booking Time</p>
              <p className="font-bold text-md">{booking.bookingTime}</p>
            </div>
            <div className="flex flex-col gap-1 w-full md:flex-1">
              <p>Booked By</p>
              <p className="font-bold text-md">{booking.bookedBy}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingBooking;
