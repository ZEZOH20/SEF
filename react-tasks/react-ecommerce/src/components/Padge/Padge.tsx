import React from "react";

type Padge = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
  className?: string;
};
const Padge = ({ children, className, ...atributes }: Padge) => {
  return (
    <>
      <div
        className={`${className && className
          } w-fit rounded-lg border-0 p-1 px-2 text-[.7rem] text-[#166534] font-semibold capitalize bg-gradient-to-r bg-opacity-10 from-[rgba(22,163,74,50%)] via-[rgba(34,197,94,50%)] to-white  to-70%`}
        {...atributes}
      >
        {children}
      </div>
    </>
  );
};

export default Padge;
