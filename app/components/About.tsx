import { Fan, Monitor, Scissors, Wifi } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <>
      <div className="about mb-6">
        <div className="mb-4">
          Demesne far-hearted suppose venture excited see had has. Dependent on
          so extremely delivered by. Yet no jokes worse her why.{" "}
          <span className="font-bold">
            {" "}
            Bed one supposing breakfast day fulfilled off depending questions.
          </span>
        </div>
        <div>
          Delivered dejection necessary objection do Mr prevailed. Mr feeling
          does chiefly cordial in do. Water timed folly right aware if oh truth.
          Large above be to means. Dashwood does provide stronger is.
        </div>
      </div>

      <div className="highlight">
        <h2 className="text-xl font-bold">Main Highlights</h2>
        <div className="icons flex items-center gap-2 mt-6">
          <div className="wifi p-4 bg-[#f8f9fa]">
            <Wifi />
          </div>
          <div className="scissor p-4 bg-[#f8f9fa]">
            <Scissors />
          </div>
          <div className="tv p-4 bg-[#f8f9fa]">
            <Monitor />
          </div>
          <div className="fan p-4 bg-[#f8f9fa]">
            <Fan />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
