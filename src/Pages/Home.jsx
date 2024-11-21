import React from "react";
import BannerSlider from "../components/BannerSlider/BannerSlider";
import TopBrands from "../components/TopBrands/TopBrands";
import BrandsOnSale from "../components/BrandsOnSale/BrandsOnSale";

const Home = () => {
  return (
    <div className=" font-poppins">
      <div className="bg-[#bbf4ff4a] ">
        <div className="w-11/12 mx-auto">
          <BannerSlider></BannerSlider>
        </div>
      </div>
      <section className="w-11/12 mx-auto">
        <TopBrands></TopBrands>
      </section>
      <section className="w-11/12 mx-auto">
        <BrandsOnSale></BrandsOnSale>
      </section>

    </div>
  );
};

export default Home;
