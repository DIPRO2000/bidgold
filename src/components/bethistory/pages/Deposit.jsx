import React, { useState } from "react";
import AuthNav from "../../authnav";
import ButtonBar from "../../butons";
import DashboardSection from "./../DashboardSection";
import { Wallet } from "lucide-react";

function Deposit() {
  const [active, setActive] = useState("Deposit");

  return (
    <div className="pt-20 dark:bg-[#2D2D2D] bg-white min-h-screen transition-all">
      {/* Top Banner */}
      <div
        className="w-full h-60 bg-cover bg-center flex items-end px-6 pb-4"
        style={{ backgroundImage: "url('/landingassets/Image.svg')" }}
      >
        <div className="p-4 rounded-lg text-black">
          <div className="flex items-center space-x-4">
            <img src="/user-icon.svg" alt="User" className="w-16 h-16" />
            <div>
              <h1 className="text-5xl font-bold">JOHN DOE</h1>
              <p className="text-2xl font-semibold">BETID: ABCD1234</p>
              <p className="text-xl font-medium">
                WINNING BET: 55% | LOSING BET: 45%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <AuthNav />
      <ButtonBar active={active} setActive={setActive} />
      <DashboardSection />

      {/* Wallet Heading */}
      <div className="px-6 sm:px-8 mt-8">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          WALLET AND BALANCE
        </h2>
      </div>

      {/* Wallet Cards */}
      <div className="px-6 sm:px-8 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-black w-full max-w-md"
          >
            <div className="flex items-center space-x-3">
              <Wallet size={24} />
              <div className="text-lg font-bold">Net Balance</div>
            </div>
            <div className="mt-2 text-2xl font-bold text-green-600">
              1.786 BTC
            </div>
            <div className="text-sm font-medium mt-1">
              of withdrawable:{" "}
              <span className="text-green-600">2.786 BTC</span>
            </div>
          </div>
        ))}
      </div>

      {/* Forms */}
      <div className="px-6 sm:px-8 mt-12 grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Insert Wallet Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 col-span-3">
          <h3 className="text-xl font-semibold text-black mb-4">
            INSERT A NEW WALLET
          </h3>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">
              ACCOUNT HOLDER NAME
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-green-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">
              CARD NUMBER
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-green-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-black">
                EXPIRY DATE
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-black">
                CVV
              </label>
              <input
                type="password"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-green-500"
              />
            </div>
          </div>

          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 font-bold transition-all">
            ADD WALLET
          </button>
        </div>

        {/* Deposit Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 col-span-2">
          <h3 className="text-xl font-semibold text-black mb-4">
            DEPOSIT INTO WALLET
          </h3>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">
              ENTER AMOUNT
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-green-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">
              SELECT YOUR PAYMENT WALLET
            </label>
            <select className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-green-500">
              <option>PayPal</option>
              <option>Stripe</option>
              <option>Skrill</option>
            </select>
          </div>

          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 font-bold transition-all">
            DEPOSIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
