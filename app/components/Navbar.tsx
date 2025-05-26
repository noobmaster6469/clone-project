import { Gift, Mail, MapPin, MoveLeft, Phone, User } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <header className="border-b-1 fixed top-0 left-0 right-0 z-99 sm:px-[7vw] px-2 bg-white py-2 text-sm">
      <div className="container flex items-center justify-between mx-auto">
        <div className="arrow bg-gray-200 p-2 rounded-full hover:bg-black hover:text-white transition duration-400 ease-in-out cursor-pointer active:-translate-x-2 ">
          <MoveLeft size={18} strokeWidth={1.5} />
        </div>
        <div className="info items-center gap-10 font-semibold hidden xl:flex">
          <div className="address flex items-center gap-3 cursor-pointer">
            <MapPin size={16} />
            <span>302 Darling street Balmain NSW 2041</span>
          </div>
          <div className="phone flex items-center gap-3 cursor-pointer">
            <Phone size={16} />
            <span>+1 202-358-0309</span>
          </div>
          <div className="mail flex items-center gap-3 cursor-pointer">
            <Mail size={16} />
            <span>balmainnailbeautylounge@gmail.com</span>
          </div>
        </div>
        <div className="actions flex gap-3  font-semibold">
          <button className="flex items-center justify-center gap-1 cursor-pointer rounded-full bg-black text-white px-4 py-1.5 hover:bg-gray-700 active:scale-95 ">
            <Gift size={15} />
            <span className="hidden md:block">Gift Cards</span>
          </button>
          <button className="flex items-center justify-center gap-1 cursor-pointer rounded-full bg-black text-white px-4 py-1.5 hover:bg-gray-700 active:scale-95">
            <User size={15} />
            <span className="hidden md:block">Login</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
