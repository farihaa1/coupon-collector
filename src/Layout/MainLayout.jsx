import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className=" font-poppins">
      <header className=" mx-auto bg-blue-950 ">
        <Header></Header>
      </header>
      <main className="">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
