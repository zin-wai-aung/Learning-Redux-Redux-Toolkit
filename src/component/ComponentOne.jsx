import React from "react";
import { useSelector } from "react-redux";
import ComponentTwo from "./ComponentTwo";
import ComponentThree from "./ComponentThree";

const ComponentOne = () => {
  const { value } = useSelector((state) => state.counter);

  return (
    <div className=" m-5">
      ComponentOne {value}
      <ComponentTwo />
      <ComponentThree />
    </div>
  );
};

export default ComponentOne;
