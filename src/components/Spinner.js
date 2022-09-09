import React from "react";

const Spinner = () => {
  return (
    <div className="mt-5 d-flex justify-content-center align-items-center">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Spinner;
