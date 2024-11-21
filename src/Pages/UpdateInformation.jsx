import React, { useState, useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateInformation = () => {
  const { updateUserProfile, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      
      await updateUserProfile(name, photoURL);
      toast.success("Information updated successfully!");
      navigate("/profile"); 
    } catch (err) {
      toast.error("Error updating information: " + err.message);
    }
  };

  return (
    <div className="hero-content flex-col lg:flex-row-reverse w-full mx-auto">
     <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mt-8 text-blue-950">
        Update Your Information
      </h2>
      
        <form onSubmit={handleUpdate} className="card-body">
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              value={name}
              className="input input-bordered w-full"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-control">
          <label className="label">
              <span className="label-text">Profile Photo URL</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter photo URL"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update Information
          </button>
        </form>
      </div>
    </div>
  
  );
};

export default UpdateInformation;
