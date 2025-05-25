import { Clock, Facebook, Instagram, Star, Youtube } from "lucide-react";
import Image from "next/image";
import { days } from "@/constant/days";

const RightSection = () => {
  const jsDayIndex = new Date().getDay();
  const today = days[(jsDayIndex + 6) % 7];
  return (
    <div className="my-4 rounded-md border-1 flex-3 h-fit sticky top-16 shadow-md">
      <div className="topSection w-full flex flex-col gap-4 border-b-2 p-4">
        <div className="flex items-center gap-4">
          <Image
            src={"/shop1.jpg"}
            alt="mainbanner"
            width={500}
            height={500}
            className="w-22 h-22 rounded-md "
          />
          <div>
            <h1 className="font-semibold">The Next Salon</h1>
            <h1 className="font-semibold flex items-center gap-2">
              <span className="font-semibold">4.5</span>
              <div className="flex  items-center">
                <Star size={16} fill="#ffc107" stroke="#ffc107" />
                <Star size={16} fill="#ffc107" stroke="#ffc107" />
                <Star size={16} fill="#ffc107" stroke="#ffc107" />
                <Star size={16} fill="#ffc107" stroke="#ffc107" />
                <Star size={16} fill="#ffc107" stroke="#ffc107" />
              </div>
            </h1>
            <h1 className="font-semibold">Thornbury, Melbourne</h1>
          </div>
        </div>
        <button className="w-full text-xl bg-black text-white py-2 rounded-full hover:bg-gray-700 cursor-pointer active:scale-95">
          Book Now
        </button>
      </div>

      <div className="open border-b-2">
        <div className="p-4 flex items-center gap-2">
          <Clock strokeWidth={1} size={20} />
          <div>
            {today.active ? (
              <>
                <span className="text-emerald-700 font-bold">Open Today </span>
                <span>
                  From {today.timing.open} - {today.timing.close}
                </span>
              </>
            ) : (
              <span className="text-red-700 font-bold">Closed Today </span>
            )}
          </div>
        </div>
      </div>

      <div className="mapDays border-b-1">
        <div className="p-4">
          {days.map((day, idx) => (
            <div className="flex items-center justify-between py-2" key={idx}>
              <div className="flex items-center gap-2">
                {!day.active ? (
                  <>
                    <div className="bg-red-700 h-4 w-4 rounded-full"> </div>
                  </>
                ) : (
                  <div className="bg-green-700 h-4 w-4 rounded-full"> </div>
                )}
                <h1 className="font-semibold">{day.name}</h1>
              </div>
              <div>
                {day.active ? (
                  <span className=" font-semibold">
                    {day.timing.open} - {day.timing.close}
                  </span>
                ) : (
                  <span className="text-red-700 font-semibold">Closed</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tala p-4">
        <h1 className="font-bold text-center">Connect With us on:</h1>
        <div className="social flex items-center justify-center gap-2 text-green-800">
          <div className="facebook p-2 border-1 rounded-xl hover:bg-slate-300 cursor-pointer">
            <Facebook />
          </div>
          <div className="instagram p-2 border-1 rounded-xl hover:bg-slate-300 cursor-pointer">
            <Instagram />
          </div>
          <div className="youtube p-2 border-1 rounded-xl hover:bg-slate-300 cursor-pointer">
            <Youtube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
