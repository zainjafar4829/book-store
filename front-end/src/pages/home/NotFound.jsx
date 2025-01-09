import React from "react";
import "../../NotFound.css";
const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-404">404</div>
      <p className="not-found-message">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a href="/" className="not-found-link">
        Go Back to Home
      </a>
    </div>
  );
};
export default NotFound;
