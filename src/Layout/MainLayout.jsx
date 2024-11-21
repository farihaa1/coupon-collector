import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
const MainLayout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  
      once: true,      
    });
  }, []);
  
  return (
    <div className=" font-poppins scroll-smooth">
      <header data-aos="fade-down" className=" mx-auto bg-blue-950 shadow-md">
        <Header></Header>
      </header>
      <main className="">
        <Outlet></Outlet>
      </main>
      <footer  data-aos="fade-up"
    data-aos-duration="3000" 
    data-aos-delay="400">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
