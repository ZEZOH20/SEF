import React from "react";
import { Link, To } from "react-router-dom";
import { useState } from "react";

type FlyoutLink = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
  to: To;
  flyoutContent?: JSX.Element;
};

const FlyoutLink = ({
  to,
  children,
  className,
  flyoutContent,
  ...atributes
}: FlyoutLink) => {
  const [open, setOpen] = useState(false);
  const showFlyout = flyoutContent && open;
  return (
    <>
      <div
        className={`${className && className} w-fit relative text-[15px]`}{...atributes}
        onMouseLeave={() => {
          setOpen(false);
        }}
        onMouseEnter={() => {
          setOpen(true);
        }}
      >
        <div className="group relative w-fit">
          <Link to={to} className="flex justify-between items-center">
            {children}
          </Link>
          {showFlyout && (
            <div className="absolute z-20 left-0 w-0 h-0 bg-purple-500 rounded-md group-hover:w-full group-hover:h-1 ease-in-out transition-all duration-300  " ></div>
          )}
        </div>

        {showFlyout && flyoutContent}
      </div>
    </>
  );
};

export default FlyoutLink;
