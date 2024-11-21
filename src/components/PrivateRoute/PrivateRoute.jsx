import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

 
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ring text-blue-800 w-32 h-32"></span>
      </div>
    );
  }

  
  if (!user) {
    return <Navigate to='/login' />;
  }

 
  return <>{children}</>;
};

export default PrivateRoute;
