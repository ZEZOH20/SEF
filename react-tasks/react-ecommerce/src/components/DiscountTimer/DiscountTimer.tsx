import React from "react";

type DiscountTimer = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

const DiscountTimer = ({ className, ...atributes }: DiscountTimer) => {
  return (
    <>
      <div
        className={`flex flex-col md:flex-row items-center md:justify-evenly bg-[#634C9F] text-white text-xs p-2
          ${className && className}
          `}
        {...atributes}
      >
        <div className=" w-[25rem] font-semibold">
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order
          in.
        </div>
        <div className=" w-96 flex justify-evenly items-center">
          <p>Until the end of the sale:</p>
          <div className=" w-7/12 flex justify-evenly items-center">
            {/* Need Future Updates : Dynamic Time*/}
            <div>
              <span className=" font-bold text-sm">47</span> days
            </div>
            <div>
              <span className=" font-bold text-sm">06</span> hours
            </div>
            <div>
              <span className=" font-bold text-sm">55</span> minutes
            </div>
            <div>
              <span className=" font-bold text-sm">51</span> sec.
            </div>
            {/* Need Future Updates : Dynamic Time*/}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountTimer;
