import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <h1>404: Error</h1>
      <Link to="/">
        <button>Return Home</button>
      </Link>
    </div>
  );
};

export default Error;
