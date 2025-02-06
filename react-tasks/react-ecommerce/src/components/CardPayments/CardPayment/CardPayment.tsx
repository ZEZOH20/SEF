import React from "react";

type CardPayment = {
  card: {
    image: JSX.Element;
    title: string;
    paragraph: string;
  } | undefined;
};

const CardPayment = ({ card }: CardPayment) => {
  return (
    <>
      {card && (
        <section className="grid grid-cols-4 gap-1 shadow-md rounded-md hover:scale-95 transition-all duration-75 cursor-pointer">
          <div className=" relative">
            <div className=" absolute bottom-1 left-1/2 -translate-x-1/2">
              {card.image}
            </div>
          </div>
          <div className=" col-span-3 text-xs py-6">
            <h4 className=" font-semibold text-[0.8rem] mb-0.5">
              {card.title}
            </h4>
            <p className=" text-gray-500">{card.paragraph}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default CardPayment;
