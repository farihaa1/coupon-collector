import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // New loading state
  const [showPassword, setShowPassword] = useState(false); // Show password state

  const { handleLogin, handleGoogleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formValues;

    setLoading(true);
    try {
      await handleLogin(email, password);
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      setError("Error during login: " + err.message);
      toast.error(err.message || "Login failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLoginClick = async () => {
    try {
      await handleGoogleLogin();
      toast.success("Login successful!");
      navigate("/");
    } catch (err) {
      setError("Error during Google login: " + err.message);
      toast.error(err.message || "Login failed!");
    }
  };

  return (
    <div className="hero bg-base-200 py-16">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-xl ">
          <h1 className="text-3xl md:text-4xl font-bold text-center mt-8 text-blue-950">
            Login now!
          </h1>
          <form onSubmit={handleOnSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-base md:text-lg">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="text-base md:text-lg">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute text-2xl top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                >
                  {showPassword ? <IoMdEye /> : <FaEyeSlash />}
                </span>
              </div>
              <label className="label">
              <Link to={`/forgot-password?email=${formValues.email}`} className="text-sm text-gray-500">
                Forgot Password?
              </Link>
              </label>
            </div>
            {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
            <div className="form-control mt-6">
              <button
                className="btn btn-primary text-white"
                type="submit"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
            <p className="text-center mt-3">
              New to the website? <br />
              <Link to="/registration" className="text-red-500">
                Register Now!
              </Link>
            </p>
            
          </form>

          
          <p className="text-center mb-6 text-xl font-semibold text-blue-950">or</p>
          <div className="flex justify-center">
            <button
              onClick={handleGoogleLoginClick}
              className="bg-base-200 text-black px-4 py-2 rounded-lg font-semibold flex justify-center items-center gap-3 mb-8"
              aria-label="Sign in with Google"
            >
              <FaGoogle /> <span>Sign In With Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
