import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

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
            `border-none bg-none ${isActive ? "text-primary" : "text-black"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/brands"
          className={({ isActive }) =>
            `border-none bg-none ${isActive ? "text-primary" : "text-black"}`
          }
        >
          Brands
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `border-none bg-none ${
                  isActive ? "text-primary" : "text-black"
                }`
              }
            >
              My Profile
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/about-dev"
          className={({ isActive }) =>
            `border-none bg-none ${isActive ? "text-primary" : "text-black"}`
          }
        >
          About Dev
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar gap-4">
      <div className="navbar-start">
        <div className="dropdown z-10">
          <div tabIndex={0} role="button" className="mr-3 lg:hidden">
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
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 py-6 px-4 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="text-xl md:text-3xl font-bold">
          Coup<span className="text-primary">on</span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 gap-3 border-none text-xl lg:text-2xl">
          {links}
        </ul>
      </div>

      <div className="navbar-end flex gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </NavLink>
              </li>

              <li>
                <NavLink onClick={handleLogout} to="/">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `bg-primary text-bold text-base px-4 py-2 rounded-lg md:text-xl text-white border-none ${
                  isActive ? "opacity-85" : ""
                }`
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/registration"
              className={({ isActive }) =>
                `bg-primary text-bold text-base px-4 py-2 rounded-lg md:text-xl text-white border-none ${
                  isActive ? "opacity-85" : ""
                }`
              }
            >
              Registration
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
