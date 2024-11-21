import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-6xl mx-auto my-12">
      <h2 className="text-3xl font-bold my-6">Profile information:</h2>
      {user ? (
        <div className="flex flex-col gap-2 my-8">
          <div className="w-2/4">
          <img
            src={user.photoURL || "default-photo-url.jpg"} 
            alt="Profile"
            className="w-full object-cover rounded-xl"
          />
          </div>
          <h3 className="text-2xl font-semibold">Name: {user.displayName}</h3>
          <p className="text-2xl ">Email: {user.email}</p>
          <button className="flex my-2">
          <Link to="/profile/update" className="btn btn-primary text-white text-lg">
            Update Information
          </Link>
          </button>
        </div>
      ) : (
        <p>No user information available</p>
      )}
    </div>
  );
};

export default Profile;
