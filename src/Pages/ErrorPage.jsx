import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const errorMessage = error?.statusText || error?.message || "An unexpected error occurred.";

  return (
    <div className="hero bg-base-200 py-12 mb-8 min-h-screen flex flex-col gap-3 justify-center items-center">
      <div id="error-page" className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-semibold my-4">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{errorMessage}</i>
        </p>
      </div>
      <Link to="/" className="btn btn-primary mt-4">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
