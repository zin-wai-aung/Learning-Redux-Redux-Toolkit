import React from "react";
import { increase } from "../store/action/counter.action";
import { useDispatch } from "react-redux";
const ComponentTwo = () => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    increase(dispatch);
  };
  return (
    <div className=" my-6">
      ComponentTwo
      <button
        className=" ms-5 bg-slate-600 cursor-pointer py-2 px-4 text-white rounded"
        onClick={handleIncrease}
      >
        Increase
      </button>
    </div>
  );
};

export default ComponentTwo;
