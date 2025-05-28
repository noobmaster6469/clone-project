export interface DateTime {
  date: string;
  time: string;
}

export const dateTime: DateTime = {
  date: "Monday, March 10",
  time: "10:20 AM - 2:30 PM GMT+10",
};

export interface OrderedFood {
  name: string;
  price: string;
}

export const orderedFood: OrderedFood[] = [
  {
    name: "Double Bundle (2 Large Pizzas + 2 Sides)",
    price: "$50",
  },
  {
    name: "Burger Box - Cheeseburger Box",
    price: "$50",
  },
];

interface SelectDate {
  day: string;
  date: string;
}

export const selectDate: SelectDate[] = [
  {
    day: "Mon",
    date: "2",
  },
  {
    day: "Tue",
    date: "3",
  },
  {
    day: "Wed",
    date: "4",
  },
  {
    day: "Thu",
    date: "5",
  },
  {
    day: "Fri",
    date: "6",
  },
  {
    day: "Sat",
    date: "7",
  },
  {
    day: "Sun",
    date: "8",
  },
  {
    day: "Mon",
    date: "9",
  },
  {
    day: "Tue",
    date: "10",
  },
  {
    day: "Wed",
    date: "11",
  },
];

export const selectTime: string[] = [
  "8:00 AM",
  "12:00 PM",
  "5:00 PM",
  "3:00 AM",
];

interface FoodItems {
  name: string;
  price: string;
  offerPrice: string;
  url: string;
}

export const foodItems: FoodItems[] = [
  {
    name: "Double Bundle (2 Large Pizzas + 2 Sides)",
    price: "$2.99",
    offerPrice: "$1.99",
    url: "/pizza.jpg",
  },
  {
    name: "Salted Caramel Chocolate Mousse",
    price: "$2.99",
    offerPrice: "$1.99",
    url: "/hotdog.jpg",
  },
  {
    name: "Burger Box - Cheeseburger Box",
    price: "$2.99",
    offerPrice: "$1.99",
    url: "/burger.jpg",
  },
  {
    name: "Vegan Spicy Veg Supreme",
    price: "$2.99",
    offerPrice: "$1.99",
    url: "/vegSupreme.jpg",
  },
  {
    name: "Burger Box - Cheeseburger Box",
    price: "$2.99",
    offerPrice: "$1.99",
    url: "/burger.jpg",
  },
  {
    name: "Vegan Spicy Veg Supreme",
    price: "$2.99",
    offerPrice: "$1.99",
    url: "/vegSupreme.jpg",
  },
  {
    name: "Double Bundle (2 Large Pizzas + 2 Sides) ",
    price: "$2.99",
    offerPrice: "$1.99",
    url: "/pizza.jpg",
  },
  {
    name: "Salted Caramel Chocolate Mousse",
    price: "$2.99",
    offerPrice: "$1.99",
    url: "/hotdog.jpg",
  },
];
