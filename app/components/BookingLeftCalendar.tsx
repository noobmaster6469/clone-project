import React from "react";
import CalendarSection from "./CalendarSection";
import TimeSection from "./TimeSection";
import FoodAndBeverages from "./FoodAndBeverages";

const BookingLeftCalendar = () => {
  return (
    <div className="pt-4 h-fit w-full xl:w-4/6">
      <h1 className="text-3xl font-bold mb-4">Select Date & Time</h1>
      <CalendarSection />
      <TimeSection />
      <FoodAndBeverages />
    </div>
  );
};

export default BookingLeftCalendar;
