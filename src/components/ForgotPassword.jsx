import React, { useState, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { resetPassword, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const emailFromQuery = queryParams.get("email");
    if (emailFromQuery) {
      setEmail(emailFromQuery);
    }
  }, [location.search]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await resetPassword(email);
      toast.success("Password reset email sent!");

      await logOut();

      // Show a button or message prompting the user to open Gmail in a new tab
      // instead of directly calling window.open()

      setTimeout(() => {
        window.open("https://mail.google.com", "_blank");
      }, 1000); // Wait a second before opening Gmail
    } catch (err) {
      setError("Error during password reset: " + err.message);
      toast.error(err.message || "Password reset failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hero bg-base-200 py-12 mb-8">
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
          <h1 className="text-4xl font-bold text-center mt-8 text-blue-950">
            Forgot Password
          </h1>
          <form onSubmit={handleResetPassword} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter your Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <div className="form-control mt-6">
              <button
                className="btn btn-primary text-white"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Reset Email"}
              </button>
            </div>
          </form>
          <p className="text-center mt-3 mb-8">
            Remembered your password? <br />
            <Link to="/login" className="text-red-500">
              Login Now!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
