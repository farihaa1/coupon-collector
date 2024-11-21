import React from "react";
import { FaSearch, FaGift, FaCheckCircle } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="bg-blue-100 py-16">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-950 mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center items-center">
            <div className="text-blue-500 text-4xl mb-4">
              <FaSearch />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Step 1: Search
            </h3>
            <p className="text-gray-600">
              Search for your favorite brands and products offering discounts.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center items-center">
            <div className="text-blue-500 text-4xl mb-4">
              <FaGift />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Step 2: Choose
            </h3>
            <p className="text-gray-600">
              Browse through available coupons and select the best offers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col justify-center items-center">
            <div className="text-blue-500 text-4xl mb-4">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Step 3: Redeem
            </h3>
            <p className="text-gray-600">
              Use the coupon code and enjoy your discount on the purchase!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
