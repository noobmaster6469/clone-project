import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const SplitSections = () => {
  return (
    <div className="sm:px-[7vw] px-2 gap-4 xl:flex">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default SplitSections;
