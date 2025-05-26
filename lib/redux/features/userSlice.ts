import { createSlice } from "@reduxjs/toolkit";

interface userState {
  name: string | null;
  url?: string;
  email?: string;
  phone?: string;
  address?: string;
  gender?: string;
  city?: string;
  country?: string;
  state?: string;
  postalCode?: string;
}

const initialState: userState = {
  name: "Jacqueline Miller",
  url: "/avatar.jpg",
  email: "sBk4I@example.com",
  phone: "+1 202-358-0309",
  address: "302 Darling street Balmain NSW 2041",
  gender: "female",
  city: "Balmain",
  country: "Australia",
  state: "New South Wales",
  postalCode: "2041",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const {} = counterSlice.actions;
export default counterSlice.reducer;
