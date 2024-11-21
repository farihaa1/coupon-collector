import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="bg-base-200 text-black py-24">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl text-blue-950 font-bold mb-8">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg border">
            <p className="italic mb-4">
              "This app saved me so much money on my last shopping spree. Highly recommend!"
            </p>
            <h3 className="font-semibold text-xl">John Doe</h3>
            <p className="text-gray-600">Tech Enthusiast</p>
            <div className="mt-4">
              <FaStar className="inline-block text-yellow-400" />
              <FaStar className="inline-block text-yellow-400" />
              <FaStar className="inline-block text-yellow-400" />
              <FaStar className="inline-block text-yellow-400" />
              <FaStar className="inline-block text-gray-300" />
            </div>
          </div>
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg border">
            <p className="italic mb-4">
              "Amazing discounts on products I love. I use it every time I shop online!"
            </p>
            <h3 className="font-semibold text-xl">Jane Smith</h3>
            <p className="text-gray-600">Fashion Blogger</p>
            <div className="mt-4">
              <FaStar className="inline-block text-yellow-400" />
              <FaStar className="inline-block text-yellow-400" />
              <FaStar className="inline-block text-yellow-400" />
              <FaStar className="inline-block text-yellow-400" />
              <FaStar className="inline-block text-gray-300" />
            </div>
          </div>
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg border">
            <p className="italic mb-4">
              "Super easy to use, and I found a great deal on tech gadgets. Definitely my go-to for savings!"
            </p>
            <h3 className="font-semibold text-xl">Sam Lee</h3>
            <p className="text-gray-600">Gadget Enthusiast</p>
            <div className="mt-4">
              <FaStar className="inline-block text-yellow-400" />
              <FaStar className="inline-block text-yellow-400" />
              <FaStar className="inline-block text-yellow-400" />
              <FaStar className="inline-block text-yellow-400" />
              <FaStar className="inline-block text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
