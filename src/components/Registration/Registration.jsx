import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaEyeSlash } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";

const Registration = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    image: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { handleRegister, updateUserProfile } = useContext(AuthContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return passwordRegex.test(password);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { name, image, email, password } = formValues;
    setLoading(true);

    if (!isValidPassword(password)) {
      setError("Password must contain at least 6 characters, one uppercase letter, and one lowercase letter.");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await handleRegister(email, password);
      const { user } = userCredential;

      if (user) {
        await updateUserProfile(name, image);
        toast.success("Registration successful!");
        navigate("/");
      } else {
        throw new Error("Failed to retrieve user information.");
      }
    } catch (err) {
      console.error("Error during registration:", err.message);
      toast.error(err.message || "Registration failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero bg-base-200 py-16">
      <div style={{ animationDuration: "2s" }} className="hero-content flex-col lg:flex-row-reverse w-full animate__animated animate__fadeInUp">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-xl">
          <h1 className="text-4xl font-bold text-center mt-8 text-blue-950">
            Registration
          </h1>
          <form onSubmit={handleOnSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                className="input input-bordered"
                required
                aria-label="Enter your name"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo-URL</span>
              </label>
              <input
                type="text"
                placeholder="photo-url"
                name="image"
                value={formValues.image}
                onChange={handleInputChange}
                className="input input-bordered"
                required
                aria-label="Enter your photo URL"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
                className="input input-bordered"
                required
                aria-label="Enter your email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleInputChange}
                  className="input input-bordered w-full pr-12"  
                  required
                  aria-label="Enter your password"
                />
                <button
                  type="button"
                  className="absolute top-1/2 text-2xl right-3 transform -translate-y-1/2"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <IoMdEye /> : <FaEyeSlash />}
                </button>
              </div>
              <label className="label">
                <Link to="/forgot-password" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}

            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary text-white"
                disabled={loading}
              >
                {loading ? "Processing..." : "Register"}
              </button>
            </div>
            <p className="text-center mt-3">
              Already have an account? <br />{" "}
              <Link to="/login" className="text-red-500">
                Login Now!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
