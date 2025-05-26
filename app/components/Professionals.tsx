import React from "react";

const Professionals: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 text-xl">
      <div className="w-20 h-20 font-semibold flex items-center justify-center text-3xl bg-[#feeef0] rounded-full">
        {name[0]}
      </div>
      <span className="text-[#1e1e1e] text-[16px] w-full max-w-[140px] text-center overflow-hidden text-ellipsis whitespace-nowrap px-2">
        {name}
      </span>
    </div>
  );
};

export default Professionals;
