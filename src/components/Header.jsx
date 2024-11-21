import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "../components/Navbar";

const Header = () => {
  const { user} = useContext(AuthContext);


  return (
    <div className="flex flex-col items-center mt-6 lg:my-8">
      {user &&  (
        <h1 className="text-3xl mb-4 lg:mb-4 font-semibold text-primary">
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
