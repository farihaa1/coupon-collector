import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "../components/Navbar";

const Header = () => {
  const { user} = useContext(AuthContext);


  return (
    <div style={{ animationDuration: "1s" }}    className="w-11/12 mx-auto flex flex-col items-center pt-4 md:py-4 animate__animated animate__fadeInDown">
      {user &&  (
        <h1 className="text-lg md:text-2xl mb-2 lg:mb-4 font-semibold text-white">
          Welcome, {user.displayName}!
        </h1>
      ) }
      <nav className="w-full mx-auto z-10 ">
        <Navbar />
      </nav>
    </div>
  );
};

export default Header;
