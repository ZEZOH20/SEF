import React from "react";
import Padge from "../Padge/Padge";
import Button from "../Button/Button";
import Price from "../Price/Price";
type Banner = {
  img?: string;
  padge?: JSX.Element;
  title?: string;
  description?: string;
  price: number;
  discountAmount?: number;
  switchDirection?: number;
};
const Banner = ({ img, padge, title, description, price, discountAmount, switchDirection, }: Banner) => {
  return (
    <>
      <div
        style={img ? { backgroundImage: `url(${img})` } : { backgroundImage: `url("src/assets/banner1.png")` }}
        //bg-bottom h-80
        className={
          switchDirection
            ? `bg-bottom h-80 w-80 bg-no-repeat bg-cover rounded-md shadow-md relative`
            : `bg-center bg-no-repeat bg-cover rounded-md shadow-md relative`
        }
      >
        <div className=" flex flex-col justify-between gap-2 p-5">
          {/* padge */}
          {padge ? padge : <Padge>Only This Week</Padge>}

          {/* {title} */}
          <h4 className=" font-semibold text-lg">
            {title ? title : <span>
              Quality eggs at an <br />
              affordable price
            </span>
            }
          </h4>
          {/* {description} */}
          <p className="text-gray-700 text-[.7rem]">
            {description ? description :
              <span>
                We have prepared special discounts for you on grocery <br />
                products. Don't miss these opportunities...
              </span>
            }
          </p>
          <div className=" flex w-fit ">
            {/* {button} */}
            <Button className="mr-2 ">Shop Now</Button>
            {/* {price} */}
            <Price price={price} discountAmount={discountAmount} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
