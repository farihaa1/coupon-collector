import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "../components/Navbar";

const Header = () => {
  const { user} = useContext(AuthContext);


  return (
    <div className="w-11/12 mx-auto flex flex-col items-center pt-4 md:py-4">
      {user &&  (
        <h1 className="text-lg md:text-2xl mb-2 lg:mb-4 font-semibold text-white">
          Welcome, {user.displayName}!
        </h1>
      ) }
      <nav className="w-full mx-auto">
        <Navbar />
      </nav>
    </div>
  );
};

export default Header;
