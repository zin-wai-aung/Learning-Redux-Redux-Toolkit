import React from 'react'
import { useDispatch } from "react-redux";
import { decrease } from '../store/action/counter.action';


const ComponentThree = () => {

  const dispatch = useDispatch();

  const handleDecrease = () => {
    decrease(dispatch)
  }
  return (
    <div>
      ComponentThree
      <button
        className=" ms-5 bg-slate-600 cursor-pointer py-2 px-4 text-white rounded"
        onClick={handleDecrease}
      >
        Decrease
      </button>
    </div>
  );
}

export default ComponentThree