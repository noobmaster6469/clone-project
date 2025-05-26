"use client";

import { Button } from "@/components/ui/button";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { increment, decrement } from "@/lib/redux/features/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="flex text-2xl bg-black text-white min-h-screen items-center justify-center">
      <Button onClick={() => dispatch(increment())}>+</Button>
      <span className="mx-4">{count}</span>
      <Button onClick={() => dispatch(decrement())}>-</Button>
    </div>
  );
};

export default Counter;
