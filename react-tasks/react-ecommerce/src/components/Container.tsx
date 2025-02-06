import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
const Container = (props: ContainerProps) => {
  return (
    <div
      className={`container mx-auto ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
};

export default Container;
