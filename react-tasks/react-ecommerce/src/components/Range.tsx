import { Fragment } from "react";

const Range = ({ children, start, end, }: { start: number, end: number, children: React.ReactNode }) => {
  const numbers = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  return (
    <>
      {numbers.map((number) => (
        <Fragment key={number}>{children}</Fragment>
      ))}
    </>
  );
};

export default Range;
