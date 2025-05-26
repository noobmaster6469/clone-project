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

interface servicesDescription {
  name: string;
  time: string;
  gender: string;
  description: string;
  originalPrice: string | null;
  currentPrice: string;
  discount: boolean;
}

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

export const servicesDescription: servicesDescription[] = [
  {
    name: "Deluxe Manicure",
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
    time: "1 Hour",
    gender: "Male only",
    description:
      "Sanitize hands- Shape nails- Remove cuticles- Remove dead skin around nails Hand Bath- Hand Scrub- Massage- Moisturize",
    originalPrice: null,
    currentPrice: "$750",
    discount: false,
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
