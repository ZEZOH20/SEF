import React from "react";

type Button = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};
//same : interface ButtonDynamic extends  React.HTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, className, ...props }: Button) => {
  return (
    <button className={`${className && className}  bg-black text-white font-semibold text-xs rounded-md capitalize p-3 px-5 hover:scale-95 hover:bg-opacity-95  transform duration-200`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;


