import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type PaymentMethod = "credit" | "paypal" | null;

const BookingLeftPayment: React.FC = () => {
  const [activeMethod, setActiveMethod] = useState<PaymentMethod>("credit");

  const toggleDropdown = (method: PaymentMethod) => {
    setActiveMethod((prev) => (prev === method ? null : method));
  };

  const dropdownVariants = {
    hidden: { height: 0 },
    visible: { height: "auto" },
  };

  return (
    <div className="pt-4 h-fit w-full xl:w-4/6">
      <h1 className="text-3xl font-bold mb-4">Payment</h1>

      <div className="payment">
        {/* Credit Card Section */}
        <div className="creditCard border-2 rounded-t-md">
          <div
            className={`title border-b ${
              activeMethod === "credit" ? "bg-blue-100" : ""
            }`}
            onClick={() => toggleDropdown("credit")}
          >
            <div className="text-lg font-semibold p-4 flex items-center justify-between cursor-pointer">
              <span>Pay with Credit Card</span>
              <ChevronDown
                className={`transition-transform ${
                  activeMethod === "credit" ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          <AnimatePresence initial={false}>
            {activeMethod === "credit" && (
              <motion.div
                key="credit"
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={dropdownVariants}
                transition={{ duration: 0.3 }}
                className="dropdown overflow-hidden"
              >
                <div className="flex items-center h-fit p-4 gap-2">
                  <span>We accept following credit cards: </span>
                  <Image
                    src="/mastercard.png"
                    alt="Credit Cards"
                    width={20}
                    height={20}
                    className="h-full"
                  />
                </div>

                <div className="form p-4">
                  <form className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                      <input
                        className="w-full sm:w-1/2 outline-none border rounded-md p-2 focus:border-blue-300"
                        type="text"
                        placeholder="Card Number"
                      />
                      <input
                        className="w-full sm:w-1/2 outline-none border rounded-md p-2 focus:border-blue-300"
                        type="text"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-1/2">
                        <input
                          className="w-full flex-col sm:flex-row sm:w-1/2 outline-none border rounded-md p-2 focus:border-blue-300"
                          type="text"
                          placeholder="MM/YY"
                        />
                        <input
                          className="w-full flex-col sm:flex-row sm:w-1/2 outline-none border rounded-md p-2 focus:border-blue-300"
                          type="text"
                          placeholder="CVC"
                        />
                      </div>
                      <div className="w-full sm:w-1/2">
                        <button
                          className="w-full bg-black text-white rounded-full cursor-pointer hover:bg-gray-800 active:scale-95 p-2"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* PayPal Section */}
        <div className="paypal border-l-2 border-r-2 border-b-2 rounded-b-md">
          <div
            className={`title border-b ${
              activeMethod === "paypal" ? "bg-blue-100" : ""
            }`}
            onClick={() => toggleDropdown("paypal")}
          >
            <div className="text-lg font-semibold p-4 flex items-center justify-between cursor-pointer">
              <span>Pay with PayPal</span>
              <ChevronDown
                className={`transition-transform ${
                  activeMethod === "paypal" ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          <AnimatePresence initial={false}>
            {activeMethod === "paypal" && (
              <motion.div
                key="paypal"
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={dropdownVariants}
                transition={{ duration: 0.3 }}
                className="dropdown overflow-hidden"
              >
                <div className="flex items-center h-fit p-4 gap-2">
                  <span>
                    <span className="font-semibold">PayPal</span> – the safer,
                    easier way to pay
                  </span>
                </div>

                <div className="form p-4">
                  <form className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                      <input
                        className="w-full sm:w-1/2 outline-none border rounded-md p-2 focus:border-blue-300"
                        type="text"
                        placeholder="Email"
                      />
                      <input
                        className="w-full sm:w-1/2 outline-none border rounded-md p-2 focus:border-blue-300"
                        type="password"
                        autoComplete="off"
                        placeholder="Password"
                      />
                    </div>
                    <div className="flex gap-4 items-center">
                      <div className="w-full">
                        <button
                          className="w-full bg-black text-white rounded-full cursor-pointer hover:bg-gray-800 active:scale-95 p-2"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default BookingLeftPayment;
