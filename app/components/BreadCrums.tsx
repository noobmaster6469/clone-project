import React from "react";
import { crumbs } from "@/constant/breadcrumb";

const capitalizeFirst = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const BreadCrums = ({ next }: { next: string }) => {
  const capitalNext = capitalizeFirst(next);

  return (
    <div className="text-sm">
      {crumbs.map((crumb, index) => (
        <span key={index}>
          <span
            className={
              crumbs[index + 1] === capitalNext
                ? "text-black font-semibold"
                : "text-gray-500"
            }
          >
            {crumb}
          </span>
          {index < crumbs.length - 1 && (
            <span className="mx-1 text-gray-400">{">"}</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default BreadCrums;
