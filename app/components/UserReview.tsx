// components/UserReview.tsx
import Image from "next/image";

type Review = {
  id: number;
  name: string;
  date: string;
  reviewsWritten: number;
  comment: string;
  rating: number;
  managerReply?: string;
  avatarUrl: string;
};

const reviews: Review[] = [
  {
    id: 1,
    name: "Jacqueline Miller",
    date: "13 Nov 2022",
    reviewsWritten: 4,
    comment:
      "Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.",
    rating: 4.5,
    managerReply:
      "But discretion frequently sir she instruments unaffected admiration everything.",
    avatarUrl: "/avatar.jpg",
  },
  {
    id: 2,
    name: "Dennis Barrett",
    date: "02 Nov 2022",
    reviewsWritten: 2,
    comment:
      "Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. Water timed folly right aware if oh truth. Large above be to means. Dashwood does provide stronger is.",
    rating: 4.0,
    avatarUrl: "/avatar.jpg",
  },
];

export default function UserReview() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {reviews.map((review) => (
        <div key={review.id} className="mb-8 border-b pb-6">
          <div className="flex sm:flex-row flex-col items-start gap-4">
            <Image
              src={review.avatarUrl}
              alt={review.name}
              width={48}
              height={48}
              className="rounded-full w-12 h-12 object-cover"
            />
            <div className="flex-1">
              <p className="font-semibold">{review.name}</p>
              <p className="text-sm text-gray-500">
                Stayed {review.date} • {review.reviewsWritten} Reviews written
              </p>
              <p className="mt-2 text-gray-700">{review.comment}</p>

              {review.managerReply && (
                <div className="mt-4 bg-gray-100 rounded p-4 flex sm:flex-row flex-col items-start gap-3">
                  <Image
                    src={review.avatarUrl}
                    alt="Manager"
                    width={48}
                    height={48}
                    className="rounded-full w-12 h-12 object-cover"
                  />
                  <div>
                    <p className="font-semibold">Manager</p>
                    <p className="text-gray-700">{review.managerReply}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="sm:ml-4 ml-0 bg-yellow-400 text-black font-semibold rounded px-2 py-1">
              {review.rating}
            </div>
          </div>
        </div>
      ))}
      <button className="block mx-auto bg-black text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-700 active:scale-95">
        Load more
      </button>
    </div>
  );
}
