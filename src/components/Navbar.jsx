import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

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

      {user && (
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-300"
            }
          >
            My Profile
          </NavLink>
        </li>
      )}

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
    <div className="navbar gap-4 text-white">
      <div className="navbar-start">
        <div className="dropdown z-10">
          <div
            tabIndex={0}
            role="button"
            className="mr-3 lg:hidden"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-10 md:w-10"
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
          {dropdownOpen && (
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content bg-base-100 text-gray-500 rounded-box z-[1] mt-3 w-52 py-6 px-4 shadow"
            >
              {links}
            </ul>
          )}
        </div>
        <Link to="/" className="text-lg md:text-2xl font-bold">
          Discount <span className="text-yellow-400">PRO</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 gap-4 border-none text-xl lg:text-lg">
          {links}
        </ul>
      </div>

      <div className="navbar-end flex gap-2">
        {user ? (
          <>
            <div className="flex items-center space-x-4">
              <div className="dropdown dropdown-end text-gray-500">
                <div className="dropdown dropdown-end text-gray-500">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-16 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user.photoURL}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <ul
                      tabIndex={0}
                      className=" dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 px-3 shadow space-y-2 py-8"
                    >
                      <li>
                        <label className="text-sm flex flex-col justify-start items-start">
                          <span> Email:</span>
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
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="hover:underline btn btn-primary text-white md:text-base"
            >
              Login
            </Link>
            <Link
              to="/register"
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
