import { MoveRight, Star } from "lucide-react";
import React, { useState } from "react";
import UserReview from "./UserReview";

const Reviews = () => {
  const [rating, setRating] = useState(5);

  const renderStars = (count: number) =>
    "★".repeat(count) + "☆".repeat(5 - count);

  return (
    <div className="px-2">
      <div className="review flex flex-col sm:flex-row items-center justify-center bg-[#f8f9fa] rounded-sm py-10">
        <div className="left flex flex-col items-center justify-center w-1/3">
          <h1 className="text-3xl font-bold">4.5</h1>
          <h2 className="text-[#1e1e1e] font-semibold text-center">
            Based on 120 Reviews
          </h2>
          <div className="flex mt-2 items-center">
            <Star size={16} fill="#ffc107" stroke="#ffc107" />
            <Star size={16} fill="#ffc107" stroke="#ffc107" />
            <Star size={16} fill="#ffc107" stroke="#ffc107" />
            <Star size={16} fill="#ffc107" stroke="#ffc107" />
            <Star size={16} fill="#ffc107" stroke="#ffc107" />
          </div>
        </div>

        <div className="right w-full px-4  sm:w-2/3 flex flex-col gap-2">
          <div className="one flex gap-4 items-center">
            <div className="bar flex-10 h-1.5 rounded-xl bg-[#f9f1d6] relative w-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-[#ffc107]"
                style={{ width: "85%" }}
              ></div>
            </div>
            <span className="flex-1">85%</span>
          </div>

          <div className="two flex gap-4 items-center">
            <div className="bar flex-10 h-1.5 rounded-xl bg-[#f9f1d6] relative w-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-[#ffc107]"
                style={{ width: "75%" }}
              ></div>
            </div>
            <span className="flex-1">75%</span>
          </div>
          <div className="three flex gap-4 items-center">
            <div className="bar flex-10 h-1.5 rounded-xl bg-[#f9f1d6] relative w-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-[#ffc107]"
                style={{ width: "60%" }}
              ></div>
            </div>
            <span className="flex-1">60%</span>
          </div>
          <div className="four flex gap-4 items-center">
            <div className="bar flex-10 h-1.5 rounded-xl bg-[#f9f1d6] relative w-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-[#ffc107]"
                style={{ width: "35%" }}
              ></div>
            </div>
            <span className="flex-1">35%</span>
          </div>
          <div className="five flex gap-4 items-center">
            <div className="bar flex-10 h-1.5 rounded-xl bg-[#f9f1d6] relative w-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-[#ffc107]"
                style={{ width: "15%" }}
              ></div>
            </div>
            <span className="flex-1">15%</span>
          </div>
        </div>
      </div>

      <div className="giveReview flex flex-col mt-4 px-1">
        <div className="giveReview mt-4 flex-1">
          <form
            className="flex flex-col gap-4 "
            onSubmit={(e: React.FormEvent) => e.preventDefault()}
          >
            <select
              value={rating}
              onChange={(e) => setRating(parseInt(e.target.value))}
              className="border w-full border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring"
            >
              {[5, 4, 3, 2, 1].map((val) => (
                <option key={val} value={val}>
                  {renderStars(val)} ({val}/5)
                </option>
              ))}
            </select>
            <textarea
              placeholder="Your review"
              name="review"
              id="review"
              className="border w-full border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring"
              cols={30}
              rows={3}
            ></textarea>
            <button
              type="submit"
              className="cursor-pointer flex items-center font-semibold justify-center w-fit bg-black text-white px-8 py-4 rounded-4xl gap-4 hover:bg-gray-700"
            >
              Post Review <MoveRight />
            </button>
          </form>
        </div>
      </div>

      <UserReview />
    </div>
  );
};

export default Reviews;
