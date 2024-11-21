import React from "react";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import TopBrands from "../components/TopBrands/TopBrands";
import BrandsOnSale from "../components/BrandsOnSale/BrandsOnSale";
import HowItWorks from "../components/HowItWorksSection/HowItWorks";
import Testimonials from "../components/Testimonials";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className=" font-poppins ">
      <nav className="w-full mx-auto z-10 bg-blue-950">
        <Navbar />
      </nav>
      <div   className="bg-[#bbf4ff4a] ">
        <div  className="w-11/12 mx-auto">
          <BannerSlider></BannerSlider>
        </div>
      </div>
      <section className="w-11/12 mx-auto">
        <TopBrands></TopBrands>
      </section>
      <section   className="w-11/12 mx-auto">
        <BrandsOnSale></BrandsOnSale>
      </section>
      <section>
        <HowItWorks></HowItWorks>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>

    </div>
  );
};

export default Home;
