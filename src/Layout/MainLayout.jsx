import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
 
  
  return (
    <div className=" font-poppins scroll-smooth relative">
      <header data-aos="fade-down" className=" mx-auto bg-blue-950 shadow-md">
        <Header></Header>
      </header>
      <main className="">
        <Outlet></Outlet>
      </main>
      <footer style={{ animationDuration: "3s" }}  className="animate__animated animate__fadeIn animate_delay_3s">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
