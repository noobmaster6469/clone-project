"use client";
import { Gift, Mail, MapPin, MoveLeft, Phone, User } from "lucide-react";
import React, { useState } from "react";
import WelcomeBack from "./WelcomeBack";
import Login from "./Login";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import Link from "next/link";

interface NavbarProps {
  user: {
    name: string | null;
    url?: string;
    email?: string;
    phone?: string;
    address?: string;
    gender?: string;
    city?: string;
    country?: string;
    state?: string;
    postalCode?: string;
  };
}

const Navbar = ({ user }: NavbarProps) => {
  const [opened, setOpened] = useState(false);
  const [login, setLogin] = useState(false);

  const clickHandler: React.MouseEventHandler = () => {
    if (!user.name) {
      setOpened(!opened);
    }
  };
  console.log("user", user);
  return (
    <header className="border-b-1 fixed top-0 left-0 right-0 z-99 sm:px-[7vw] px-2 bg-white py-2 text-sm">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/">
          <div className="arrow bg-gray-200 p-2 rounded-full hover:bg-black hover:text-white transition duration-400 ease-in-out cursor-pointer active:-translate-x-2 ">
            <MoveLeft size={18} strokeWidth={1.5} />
          </div>
        </Link>
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
          <button
            className="flex items-center justify-center gap-1 cursor-pointer rounded-full bg-black text-white px-4 py-1.5 hover:bg-gray-700 active:scale-95"
            onClick={clickHandler}
          >
            <Gift size={15} />
            <span className="hidden md:block">Gift Cards</span>
          </button>

          {user.name && user.url ? (
            <div className="relative group">
              <div className="flex items-center gap-2 cursor-pointer rounded-full">
                <Image
                  src={user.url}
                  alt={user.name}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full cover"
                />
              </div>

              <div className="hidden group-hover:block absolute top-8 right-2 bg-white shadow-lg rounded-lg w-64">
                <ProfileCard user={user} />
              </div>
            </div>
          ) : (
            <button
              className="flex items-center justify-center gap-1 cursor-pointer rounded-full bg-black text-white px-4 py-1.5 hover:bg-gray-700 active:scale-95"
              onClick={clickHandler}
            >
              <User size={15} />
              <span className="hidden md:block">Login</span>
            </button>
          )}
        </div>
      </div>

      {opened &&
        (login ? (
          <Login setOpened={setOpened} setLogin={setLogin} />
        ) : (
          <WelcomeBack setOpened={setOpened} setLogin={setLogin} />
        ))}
    </header>
  );
};

export default Navbar;
