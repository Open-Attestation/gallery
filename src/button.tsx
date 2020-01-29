import React, { ButtonHTMLAttributes } from "react";

export const Button: React.FunctionComponent<ButtonHTMLAttributes<any>> = ({ children, ...rest }) => {
  return (
    <button
      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      {...rest}
    >
      {children}
    </button>
  );
};
