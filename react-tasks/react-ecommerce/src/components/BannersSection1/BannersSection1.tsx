import React from "react";
import Container from "../Container";
import Range from "../Range";
import Banner from "../Banner/Banner";
import Padge from "../Padge/Padge";
const BannersSection1 = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-2">
          {BannerContent.map(({ img, padge, title, description }, index) => (
            <Banner
              key={index}
              img={img}
              padge={padgeReference[padge]}
              title={title}
              description={description}
              price={27.99}
              discountAmount={12}
              
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default BannersSection1;

const BannerContent = [
  {
    img: "src/assets/banner1.png",
    padge: "Weekend Discount",
    title: "Quality eggs at an affordable price",
    description: "Eat one every day",
  },
  {
    img: "src/assets/banner4.png",
    padge: "Only This Week",
    title: "Snacks that nourishes our mind and body",
    description: "Shine the morning...",
  },
  {
    img: "src/assets/banner5.png",
    padge: "Only This Week",
    title: "Unbeatable quality,unbeatable prices.",
    description: "Only this week. Don’t miss...",
  },
];

const padgeReference: { [key: string]: JSX.Element } = {
  "Only This Week": (
    <Padge className="text-[#EA580C] from-[#FFEDD5] via-[#FFEDD5]">
      Only This Week
    </Padge>
  ),
  "Weekend Discount": <Padge>Weekend Discount</Padge>,
};

// Loop In Range

//   <Range start={1} end={3}>
//   <Banner />
// </Range>

// Loop In Range
