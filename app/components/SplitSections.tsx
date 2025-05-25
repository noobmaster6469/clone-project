import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const SplitSections = () => {
  return (
    <div className=" px-[7vw] gap-4 flex">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default SplitSections;
