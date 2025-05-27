import React, { useState } from "react";
import { bookings } from "@/constant/days";
import { X, User } from "lucide-react";
import ProfessionalsCard from "./ProfessionalsCard";
import { professionals } from "@/constant/professionals";
import { motion, AnimatePresence } from "framer-motion";

const BookingLeftProfessionalService = () => {
  const [show, setShow] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="pt-4 h-fit w-full xl:w-4/6">
      <h1 className="text-3xl font-bold mb-10">Select Professional</h1>

      {bookings.map((booking, index) => (
        <div key={index} className="border rounded-xl p-6 mb-4">
          <p className="text-xl font-semibold">{booking.title}</p>
          <div className="flex items-center gap-2 text-gray-500 mb-4">
            <p>{booking.time}</p>
            <p className="h-1 w-1 bg-gray-400 rounded-full mt-1"></p>
            <p>Refill Short Nails</p>
          </div>
          <div
            className="px-4 py-2 border w-fit rounded-3xl cursor-pointer flex items-center gap-2 active:translate-x-1 transition-all duration-200 ease-in-out hover:bg-gray-100"
            onClick={() => setShow(true)}
          >
            <User size={16} />
            Any professionals {">"}
          </div>
        </div>
      ))}

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-99 bg-[#00000080] flex items-center justify-center modal-scroll px-6"
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative shadow-lg modal-scroll"
            >
              <button
                onClick={() => setShow(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-black cursor-pointer"
              >
                <X />
              </button>
              <h1 className="text-3xl font-bold mb-4 p-6 border-b">
                Choose Professional
              </h1>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                  {professionals.map((professional, idx) => (
                    <ProfessionalsCard
                      key={idx}
                      professional={professional}
                      isActive={activeIndex === idx}
                      onClick={() => setActiveIndex(idx)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingLeftProfessionalService;
