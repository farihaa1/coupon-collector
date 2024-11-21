import { useContext, useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();


  const [menuDropdownOpen, setMenuDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setMenuDropdownOpen(false);
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Navbar links
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-300"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/brands"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-300"
          }
        >
          Brands
        </NavLink>
      </li>
      <li>
        {user && (
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-300"
            }
          >
            My Profile
          </NavLink>
        )}
      </li>
      <li>
        <NavLink
          to="/about-dev"
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "hover:text-yellow-300"
          }
        >
          About Dev
        </NavLink>
      </li>
    </>
  );

  return (
    <div style={{ animationDuration: "3s" }}   className="navbar z-50 gap-4 text-white relative animate__animated animate__fadeInUp">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown relative">
          {/* Mobile Menu Toggle */}
          <div
            onClick={() => setMenuDropdownOpen(!menuDropdownOpen)}
            tabIndex={0}
            role="button"
            className="mr-3 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          {/* Mobile Menu Dropdown */}
          <ul
            className={`absolute modal-box bg-base-100 text-gray-500 rounded-box z-50 mt-3 w-52 py-6 px-4 shadow transform transition-all duration-300 ${
              menuDropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            <li
              onClick={() => setMenuDropdownOpen(false)}
              className="flex justify-end mb-2 cursor-pointer"
            >
              <RxCross2 />
            </li>
            {links}
          </ul>
        </div>

        {/* Brand Logo */}
        <Link to="/" className="text-xl md:text-2xl font-bold">
          Discount <span className="text-yellow-400">PRO</span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 gap-4 border-none text-xl lg:text-lg">
          {links}
        </ul>
      </div>

    
      <div className="navbar-end flex gap-2">
        {user ? (
          <div className="flex items-center space-x-4">
      
            <div className="dropdown relative text-gray-500 z-10">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              >
                <div className="w-10 rounded-full">
                  <img alt="profile" src={user.photoURL} />
                </div>
              </div>

       
              <ul
                className={`absolute bg-base-100 rounded-box mt-3 w-52 px-4 pt-4 pb-8 shadow transform transition-all duration-300 -translate-x-3/4 ${
                  profileDropdownOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                <li
                  onClick={() => setProfileDropdownOpen(false)}
                  className="flex justify-end mb-4 cursor-pointer"
                >
                  <RxCross2 />
                </li>
                <li className="my-2">
                  <label className="text-sm flex flex-col justify-start items-start">
                    <span>Email:</span>
                    <span>{user.email}</span>
                  </label>
                </li>
                <li className="flex w-28">
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 px-4 py-2 text-white rounded-lg hover:bg-red-600"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="hover:underline btn btn-primary text-white md:text-base"
            >
              Login
            </Link>
            <Link
              to="/registration"
              className="hover:underline btn text-white md:text-base btn-primary"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
