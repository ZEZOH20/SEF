

const Price = ({ price, discountAmount }: { price: number, discountAmount?: number }) => {
  return (
    <>
      <div className=" leading-none">
        {
          <span
            className={discountAmount ? `text-red-600 font-bold text-lg` : `font-bold text-lg`}
          >
            ${price}
          </span>
        }
        {discountAmount && <span className={"line-through text-xs font-semibold ml-1"}>
          ${discountAmount}
        </span>
        }
        <p className=" text-gray-500 text-[.7rem]">
          Don't miss this limited time offer.
        </p>
      </div>
    </>
  );
};

export default Price;
