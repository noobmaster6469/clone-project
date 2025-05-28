import React from "react";
import { crumbs } from "@/constant/breadcrumb";
import Link from "next/link";

const capitalizeFirst = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);
const smallizeFirst = (str: string) =>
  str.charAt(0).toLowerCase() + str.slice(1);

const BreadCrums = ({ next }: { next: string }) => {
  const capitalNext = capitalizeFirst(next ? next : "");

  console.log("next", next);

  return (
    <div className="text-sm flex flex-wrap">
      {crumbs.map((crumb, index) => (
        <span key={index}>
          <Link href={`/book/${smallizeFirst(crumb)}`}>
            <span
              className={`${
                crumbs[index + 1] === capitalNext ||
                (next === "" && crumbs[index] === "Review")
                  ? "text-black font-semibold"
                  : "text-gray-500"
              }`}
            >
              {crumb}
            </span>
          </Link>
          {index < crumbs.length - 1 && (
            <span className="mx-1 text-gray-400">{">"}</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default BreadCrums;
