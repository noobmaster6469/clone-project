import { Calendar, Clock, Star } from "lucide-react";
import Image from "next/image";
import { bookings } from "@/constant/days";
import Link from "next/link";
import { useEffect, useState } from "react";
import { DateTime } from "@/constant/dateTimeAndFood";
import { OrderedFood } from "@/constant/dateTimeAndFood";

interface bookingProps {
  next: string;
  dateTime?: DateTime;
  orderedFood?: OrderedFood[];
}

const BookingRight: React.FC<bookingProps> = ({
  next,
  dateTime,
  orderedFood,
}) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const totalAmount = bookings.reduce((acc, booking) => {
      return acc + Number(booking.price?.replace("$", "") || 0);
    }, 0);
    setTotal(totalAmount);
  }, []);

  return (
    <div className="my-4 rounded-md border-1 flex-3 h-fit sticky top-16 shadow-md">
      <div className="topSection max-h-[50vh] min-h-[380px] overflow-auto modal-scroll">
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
          {dateTime && (
            <div className="date-div bg-[#f8f9fa] px-4 py-2 rounded-lg flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <Calendar size={16} />
                <span className="font-semibold">{dateTime.date}</span>
              </div>
              <div className="flex gap-2 items-center">
                <Clock size={16} />
                <span className="font-semibold">{dateTime.time}</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 ">
          {bookings.map((booking, index) => (
            <div key={index} className="flex justify-between mb-4">
              <div>
                <div className="font-semibold text-lg">{booking.title}</div>
                <div className="flex items-center gap-2 text-gray-500">
                  <div>{booking.time}</div>
                  <div className="h-1 w-1 bg-gray-500 rounded-full mt-1"></div>
                  <div>{booking.professionalsName}</div>
                </div>
              </div>
              <div className="font-semibold text-lg">{booking.price}</div>
            </div>
          ))}
        </div>

        {orderedFood && (
          <div className="food-div mx-2 bg-[#f8f9fa] px-4 py-2 rounded-lg flex flex-col gap-2 mb-2">
            <h1 className="text-lg font-bold mb-4">Food and Beverages</h1>
            {orderedFood.map((food, index) => (
              <div key={index} className="flex justify-between mb-2">
                <div>
                  <div className="font-semibold">{food.name}</div>
                </div>
                <div className="font-semibold text-lg">{food.price}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="tala p-4 border-t">
        <div className="flex justify-between items-center mb-2 font-semibold">
          <p>Subtotal</p> <span>${total}</span>
        </div>
        <div className="flex justify-between items-center mb-4 font-semibold">
          <p>Taxes</p> <span>$0.00</span>
        </div>
        <div className="flex justify-between items-center mb-2 font-semibold text-2xl">
          <p>Total</p> <span>${total}</span>
        </div>
      </div>

      <div className="btn w-full p-4 border-t-1">
        <Link href={`/book/${next}`}>
          <button className="w-full text-xl text-center text-white bg-black cursor-pointer py-2 rounded-3xl hover:bg-slate-700">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookingRight;
