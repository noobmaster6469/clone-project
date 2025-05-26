import { Eye, MapPin, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <main className="sm:px-[7vw] px-2 mt-4">
      <div className="textSection leading-8 md:leading-12 ">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold pb-0 md:pb-4">
          The Next Level Salon
        </h1>
        <div className="addressDiv sm:text-lg text-sm font-bold md:flex md:gap-4">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>5855 W Century Blvd, Los Angeles - 90045</span>
          </div>
          <div className="group text-emerald-700 flex items-center gap-2 cursor-pointer ">
            <Eye className="group-hover:text-black" size={16} />
            <span className="group-hover:text-black">View On Map</span>
          </div>
        </div>
      </div>
      <div className="imageSection mt-4 bg-[#eeeeee]">
        <Image
          className="w-full mx-auto"
          width={500}
          height={500}
          alt="hero"
          src="/mainbanner.png"
        />
        <div className="textSection px-4 py-2 flex  items-center gap-2 md:gap-6">
          <div className="imageDiv">
            <Image
              className="w-8 sm:w-13 rounded-full border-4 border-white shadow-xl"
              width={10}
              height={10}
              alt="hero"
              src="/favicon.png"
            />
          </div>
          <div className="ratingDiv flex gap-2 items-center sm:text-sm text-xs">
            <div className="ratingDiv flex items-center gap-2">
              <Star size={16} fill="#ffc107" stroke="#ffc107" />
              <span>4.5/5.0</span>
            </div>
            <div className="itemsDiv flex gap-2 items-center ">
              <div className="item1 flex items-center gap-1">
                <div className="h-1 w-1 bg-slate-500 rounded-full md:mt-2 mt-1"></div>
                <div>Italian</div>
              </div>
              <div className="item1 flex items-center gap-1">
                <div className="h-1 w-1 bg-slate-500 rounded-full md:mt-2 mt-1"></div>
                <div>Pizza</div>
              </div>
            </div>
            <div className="status">
              <button className="text-[12px] font-bold text-[#4b8754] px-2 bg-[#d9e4df] rounded-md">
                Open Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
