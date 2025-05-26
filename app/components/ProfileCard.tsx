import Image from "next/image";
import React from "react";
import { User } from "@/constant/days";
import { Bookmark, BookmarkCheck, Info, Power, Settings } from "lucide-react";
import Link from "next/link";

const ProfileCard = ({ user }: { user: User }) => {
  return (
    <div>
      <div className="top p-6 flex items-center gap-8 border-b ">
        <div className="left">
          <Image
            src={user.url ? user.url : "/avatar.png"}
            alt="user"
            className="w-10 h-10 rounded-full object-cover"
            width={100}
            height={100}
          />
        </div>
        <div className="right text-center">
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="bottom ">
        <ul>
          <Link href="/profile">
            <li className="flex items-center gap-4 cursor-pointer px-6 py-2 hover:bg-gray-100">
              <BookmarkCheck />
              My Profile
            </li>
          </Link>
          <li className="flex items-center gap-4 cursor-pointer px-6 py-2 hover:bg-gray-100">
            <Bookmark />
            My bookings
          </li>
          <li className="flex items-center gap-4 cursor-pointer px-6 py-2 hover:bg-gray-100">
            <Settings />
            Settings
          </li>
          <li className="flex items-center gap-4 cursor-pointer px-6 py-2 hover:bg-gray-100">
            <Info />
            Help Center
          </li>
          <li className="flex items-center gap-4 cursor-pointer px-6 py-2 hover:bg-gray-100">
            <Power />
            Sign Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileCard;
