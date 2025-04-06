import React, { useState } from "react";
import AuthNav from "../../authnav";
import NavbarManager from "../../NavManager";
import ButtonBar from "../../butons";
import DashboardSection from "../DashboardSection";
import { Wallet } from "lucide-react";

function Withdrawal() {
  const [active, setActive] = useState("Withdrawal");
  const userStr = localStorage.getItem("user");
  const user = JSON.parse(userStr);

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
              <p className="text-2xl font-semibold">BETID: ABCD1234</p>
              <p className="text-xl font-medium">
                WINNING BET: 55% | LOSING BET: 45%
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <NavbarManager />
      <ButtonBar active={active} setActive={setActive} />
      <DashboardSection />

      {/* Wallet Heading */}
      <div className="px-6 sm:px-8 mt-8">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          WITHDRAW YOUR MONEY
        </h2>
      </div>

      {/* Withdraw Form + Card Side by Side */}
      <div className="px-6 sm:px-8 mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Withdraw Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold text-black mb-4">WITHDRAW</h3>

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
            WITHDRAW
          </button>
        </div>

        {/* Wallet Card */}
        <div className="bg-white rounded-lg shadow-md p-6 text-black w-full max-w-md">
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
      </div>

      {/* Heading for Add Wallet Form */}
      <div className="px-6 sm:px-8 mt-12">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          ADD A NEW WALLET
        </h2>
      </div>

      {/* Add Wallet Form */}
      <div className="px-6 sm:px-8 mt-6">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl">
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
      </div>
    </div>
  );
}

export default Withdrawal;
