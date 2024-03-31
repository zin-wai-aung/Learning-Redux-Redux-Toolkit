import React from "react";
import { useDispatch } from "react-redux";
import { increase, increaseByAmount } from "../store/reducer/counter.slice";
const ComponentTwo = () => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase());
  };

  const handleIncreaseAmount = () => {
    dispatch(increaseByAmount(2));
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
      <button
        className=" ms-5 bg-slate-600 cursor-pointer py-2 px-4 text-white rounded"
        onClick={handleIncreaseAmount}
      >
        Increase by Amount
      </button>
    </div>
  );
};

export default ComponentTwo;
