import { Menu } from "lucide-react";
import React from "react";
import { services } from "@/constant/days";

const LeftSection = () => {
  return (
    // <div className=" pt-4 flex-6 mr-2 overflow-auto">
    //   <div className="font-semibold  flex items-center justify-between overflow-hidden">
    //     <div className="ham flex-1">
    //       <Menu className="cursor-pointer" strokeWidth={2} />
    //     </div>
    //     <div className="options flex flex-7 gap-4 items-center overflow-hidden">
    //       {services.map((service, idx) => (
    //         <div
    //           className="option bg-black rounded-full py-2 text-white max-w-[200px] px-4 truncate"
    //           key={idx}
    //         >
    //           {service}
    //         </div>
    //       ))}
    //     </div>
    //     <div className="scroll flex-1">hehe</div>
    //   </div>

    //   <div className="tala h-[100vh]"></div>
    // </div>

    <div className="pt-4 flex-6 mr-2 h-[100vh] overflow-x-hidden flex gap-2">
      <div className="first flex-1 bg-black text-white h-fit">
        <Menu className="cursor-pointer" strokeWidth={2} />
      </div>
      <div className="first flex-7 bg-black text-white h-fit flex relative ">
        {services.map((service, idx) => (
          <h1 className="flex-1 truncate" key={idx}>
            {service}
          </h1>
        ))}
      </div>
      <div className="first flex-1 bg-black text-white h-fit relative z-99">
        navigation
      </div>
    </div>
  );
};

export default LeftSection;
