"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const WelcomeBack = ({
  setOpened,
  setLogin,
}: {
  setOpened: (prev: boolean) => void;
  setLogin: (prev: boolean) => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitted:", { email, password, remember });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000099] px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm relative">
        <button
          onClick={() => setOpened(false)}
          className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:text-black cursor-pointer"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-2">Welcome</h2>
        <p className="text-sm text-gray-600 mb-6">
          Already have an account?{" "}
          <button
            className="text-teal-600 hover:underline cursor-pointer"
            onClick={() => setLogin(false)}
          >
            Login
          </button>
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Enter email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Enter password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confim password
            </label>
            <input
              type="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="form-checkbox mr-2"
              />
              Remember me?
            </label>
            <a href="#" className="text-teal-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md hover:bg-gray-800 cursor-pointer"
          >
            <Image
              src="/posapt-logo.svg"
              height={20}
              width={20}
              alt="POSApt"
              className="w-5 h-5"
            />
            Login with POSApt
          </button>
        </form>

        <div className="my-4 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-sm text-gray-500">Or sign in with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
          <Image
            src="/google.png"
            alt="Google"
            height={20}
            width={20}
            className="w-5 h-5"
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default WelcomeBack;
