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

export const reviews: Review[] = [
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
