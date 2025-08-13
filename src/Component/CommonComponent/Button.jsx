import React, { Children } from "react";

const Button = ({ className, children }) => {
  return (
    <>
      <div className={className}>
        <button>{children}</button>
      </div>
    </>
  );
};

export default Button;
