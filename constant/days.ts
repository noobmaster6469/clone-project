export const days = [
  {
    name: "Monday",
    active: true,
    timing: {
      open: "10:00",
      close: "19:00",
    },
  },
  {
    name: "Tuesday",
    active: true,
    timing: {
      open: "10:00",
      close: "19:00",
    },
  },
  {
    name: "Wednesday",
    active: true,
    timing: {
      open: "10:00",
      close: "19:00",
    },
  },
  {
    name: "Thursday",
    active: true,
    timing: {
      open: "10:00",
      close: "19:00",
    },
  },
  {
    name: "Friday",
    active: true,
    timing: {
      open: "10:00",
      close: "19:00",
    },
  },
  {
    name: "Saturday",
    active: false,
    timing: {
      open: "10:00",
      close: "19:00",
    },
  },
  {
    name: "Sunday",
    active: false,
    timing: {
      open: "10:00",
      close: "19:00",
    },
  },
];

export const services = [
  "Manicures (Over natural)",
  "Extensions And Refillment",
  "Treatment And Repairing",
  "Nail Art - Anything Be Gorgeous",
  "Manicure And Pedicure Service",
];

export interface ServicesDescription {
  name: string;
  type: string;
  time: string;
  gender: string;
  description: string;
  originalPrice: string | null;
  currentPrice: string;
  discount: boolean;
}

export const servicesDescription: ServicesDescription[] = [
  {
    name: "Deluxe Manicure",
    type: "Manicures (Over natural)",
    time: "1 Hour",
    gender: "Male only",
    description:
      "Sanitize hands- Shape nails- Remove cuticles- Remove dead skin around nails Hand Bath- Hand Scrub- Massage- Moisturize",
    originalPrice: "$299",
    currentPrice: "$750",
    discount: false,
  },
  {
    name: "Manicure",
    type: "Manicures (Over natural)",
    time: "1 Hour",
    gender: "Male only",
    description:
      "Sanitize hands- Shape nails- Remove cuticles- Remove dead skin around nails Hand Bath- Hand Scrub- Massage- Moisturize",
    originalPrice: null,
    currentPrice: "$750 - $850",
    discount: true,
  },
  {
    name: "Manicure + Gel Polish",
    type: "Manicures (Over natural)",
    time: "1 Hour",
    gender: "Male only",
    description:
      "Sanitize hands- Shape nails- Remove cuticles- Remove dead skin around nails Hand Bath- Hand Scrub- Massage- Moisturize",
    originalPrice: null,
    currentPrice: "$750",
    discount: false,
  },
  {
    name: "Manicure + Gel Polish",
    type: "Manicures (Over natural)",
    time: "1 Hour",
    gender: "Male only",
    description:
      "Sanitize hands- Shape nails- Remove cuticles- Remove dead skin around nails Hand Bath- Hand Scrub- Massage- Moisturize",
    originalPrice: null,
    currentPrice: "$750",
    discount: false,
  },
  {
    name: "Manicure + Gel Polish",
    type: "Manicures (Over natural)",
    time: "1 Hour",
    gender: "Male only",
    description:
      "Sanitize hands- Shape nails- Remove cuticles- Remove dead skin around nails Hand Bath- Hand Scrub- Massage- Moisturize",
    originalPrice: null,
    currentPrice: "$750",
    discount: false,
  },
  {
    name: "Manicure + Gel Polish",
    type: "Manicures (Over natural)",
    time: "1 Hour",
    gender: "Male only",
    description:
      "Sanitize hands- Shape nails- Remove cuticles- Remove dead skin around nails Hand Bath- Hand Scrub- Massage- Moisturize",
    originalPrice: null,
    currentPrice: "$750",
    discount: false,
  },
  {
    name: "Classic Nail Extensions",
    type: "Extensions And Refillment",
    time: "2 Hours",
    gender: "Unisex",
    description:
      "Application of acrylic or gel extensions to natural nails for length and shape enhancement.",
    originalPrice: "$1200",
    currentPrice: "$900",
    discount: true,
  },
  {
    name: "Extension Refill",
    type: "Extensions And Refillment",
    time: "1.5 Hours",
    gender: "Unisex",
    description:
      "Filling and reshaping of existing nail extensions to maintain length and appearance.",
    originalPrice: "$850",
    currentPrice: "$700",
    discount: false,
  },

  // Treatment And Repairing
  {
    name: "Nail Repair Treatment",
    type: "Treatment And Repairing",
    time: "45 Minutes",
    gender: "Unisex",
    description:
      "Repair broken or damaged nails using strengthening formulas and nail glue.",
    originalPrice: null,
    currentPrice: "$350",
    discount: false,
  },
  {
    name: "Cuticle Care & Nourishment",
    type: "Treatment And Repairing",
    time: "30 Minutes",
    gender: "Unisex",
    description:
      "Deep conditioning and moisturizing treatment for cuticles and surrounding skin.",
    originalPrice: "$200",
    currentPrice: "$150",
    discount: true,
  },

  // Nail Art - Anything Be Gorgeous
  {
    name: "Custom Nail Art",
    type: "Nail Art - Anything Be Gorgeous",
    time: "1 Hour",
    gender: "Unisex",
    description:
      "Creative designs tailored to your style including gems, patterns, and decals.",
    originalPrice: "$500",
    currentPrice: "$600",
    discount: false,
  },
  {
    name: "3D Nail Art",
    type: "Nail Art - Anything Be Gorgeous",
    time: "1.5 Hours",
    gender: "Unisex",
    description:
      "Advanced 3D designs and embellishments to make your nails stand out.",
    originalPrice: "$800",
    currentPrice: "$900",
    discount: true,
  },

  // Manicure And Pedicure Service
  {
    name: "Classic Manicure & Pedicure",
    type: "Manicure And Pedicure",
    time: "2 Hours",
    gender: "Unisex",
    description:
      "Complete hand and foot care including nail shaping, cuticle care, massage, and polish.",
    originalPrice: "$1200",
    currentPrice: "$1000",
    discount: false,
  },
  {
    name: "Spa Manicure & Pedicure",
    type: "Manicure And Pedicure",
    time: "2.5 Hours",
    gender: "Unisex",
    description:
      "Luxury treatment with exfoliation, moisturizing mask, massage and polish application.",
    originalPrice: "$1500",
    currentPrice: "$1300",
    discount: true,
  },
];

export const professionalsName: string[] = [
  "Laxman Sharma",
  "Sajan Aryal",
  "Rameshwor Pandey",
  "Shukla Shrestha",
  "Raman Yadav",
  "Kesar Pandey",
  "Soman Dhakal",
  "Koshal Karki",
];

export interface User {
  name: string | null;
  url?: string;
  email?: string;
  phone?: string;
  address?: string;
  dob?: string;
  gender?: string;
  city?: string;
  country?: string;
  state?: string;
  postalCode?: string;
}

export const user: User = {
  name: "Jacqueline Miller",
  url: "/avatar.jpg",
  email: "sBk4I@example.com",
  phone: "+1 202-358-0309",
  address: "302 Darling street Balmain NSW 2041",
  dob: "1990-05-15",
  gender: "female",
  city: "Balmain",
  country: "Australia",
  state: "New South Wales",
  postalCode: "2041",
};

type Booking = {
  title: string;
  bookingId: string;
  classType: string;
  bookingDate: string;
  bookingTime: string;
  bookedBy: string;
  price?: string;
  time?: string;
  professionalsName?: string;
};

export const completedBookings: Booking[] = [
  // {
  //   title: "Deluxe Manicure",
  //   bookingId: "CGDSUAHA12548",
  //   classType: "Business class",
  //   bookingDate: "Tue 05 Aug 12:00 AM",
  //   bookingTime: "Tue 06 Aug 4:00 PM",
  //   bookedBy: "Frances Guerrero",
  // },
];

export const cancelledBookings: Booking[] = [
  {
    title: "Deluxe Manicure",
    bookingId: "CGDSUAHA12548",
    classType: "Business class",
    bookingDate: "Tue 05 Aug 12:00 AM",
    bookingTime: "Tue 06 Aug 4:00 PM",
    bookedBy: "Frances Guerrero",
  },
];

export const bookings: Booking[] = [
  {
    title: "Deluxe Manicure",
    bookingId: "CGDSUAHA12548",
    classType: "Business class",
    bookingDate: "Tue 05 Aug 12:00 AM",
    bookingTime: "Tue 06 Aug 4:00 PM",
    bookedBy: "Frances Guerrero",
    price: "$50",
    time: "45 mins",
    professionalsName: "Alex Johnson",
  },
  {
    title: "Manicure",
    bookingId: "CGDSUAHA345f4",
    classType: "Business class",
    bookingDate: "Tue 05 Aug 12:00 AM",
    bookingTime: "Tue 06 Aug 4:00 PM",
    bookedBy: "Frances Guerrero",
    price: "$80",
    time: "1 Hour",
    professionalsName: "Alex Johnson",
  },
];
