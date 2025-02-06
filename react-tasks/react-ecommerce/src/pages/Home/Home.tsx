import React from "react";
import DiscountTimer from "../../components/DiscountTimer/DiscountTimer";
import Container from "../../components/Container";
import { IoIosArrowDown } from "react-icons/io";
import FlyoutLink from "../../components/FlyoutLink/FlyoutLink";
import FlyoutContent from "../../components/FlyoutLink/FlyoutContent";
import CardPayments from "../../components/CardPayments/CardPayments";
import Padge from "../../components/Padge/Padge";
import Price from "../../components/Price/Price";
import Button from "../../components/Button/Button";
import BannersSection1 from "../../components/BannersSection1/BannersSection1";
import Banner from "../../components/Banner/Banner";
const Home = () => {
  return (
    <>
      <DiscountTimer className=" bg-black" />
      <Container>
        <div className=" grid grid-cols-2">
          <div className="grid grid-cols-6 text-[#6B7280] text-xs">
            {["About Us", "My Account", "WishList", "|"].map((item, index) => (
              <div>
                <a id={`${index}`} href="https://www.google.com/?hl=ar" className="flex justify-between items-center">
                  {item}
                </a>
              </div>
            ))}
            <div className=" col-span-2">
              <a href="https://www.google.com/?hl=ar" className="flex justify-between items-center">
                We deliver to you every day from
                <span className="text-[#EA580C] font-bold ml-1">
                  7:00 to 23:00
                </span>
              </a>
            </div>
          </div>
          {/* <SomeThing /> */}
        </div>
        <div className=" grid grid-cols-12">
          <FlyoutLink className="" to="https://www.google.com/?hl=ar" flyoutContent={<FlyoutContent />}>
            Welcome
            <IoIosArrowDown className="ml-1" />
          </FlyoutLink>
          <FlyoutLink className=" col-start-2" to="https://www.google.com/?hl=ar" flyoutContent={<FlyoutContent />}>
            Welcome
            <IoIosArrowDown className="ml-1" />
          </FlyoutLink>
          <FlyoutLink className=" col-start-3" to="https://www.google.com/?hl=ar" flyoutContent={<FlyoutContent />}>
            Welcome
            <IoIosArrowDown className="ml-1" />
          </FlyoutLink>
          <div className=" grid grid-cols-2"></div>
        </div>

        <CardPayments />
        <Padge>Weekend Discount</Padge>
        <Price discountAmount={27.99} price={99} />
        <Button>Shop Now</Button>
        <Banner price={40} />
        <BannersSection1 />
      </Container>
    </>
  );
};

export default Home;
