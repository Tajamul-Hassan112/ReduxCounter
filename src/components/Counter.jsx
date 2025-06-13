import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment ,reset} from "../Redux/Slices/CounterSlice";
function Counter() {
  //to fetch the data from any slice
  const count = useSelector((state) => state.counter.value);
  //to call the reducers of our slice we have to use useDispatch hook.
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-full bg-red-500 flex flex-col gap-5 justify-center items-center">
      <div className="flex  justify-center items-center gap-6">
        <button
          onClick={() => dispatch(increment())}
          className=" bg-yellow-300  border-2 border-white text-2xl font-bold p-3 rounded-md"
        >
          Increment
        </button>
        <div className="bg-black text-white font -bold p-4">{count}</div>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-yellow-300    border-2 border-white text-2xl font-bold p-3 rounded-md"
        >
          Decrement
        </button>
      </div>
      <button 
      onClick={() => dispatch(reset())}
      className="bg-yellow-300    border-2 border-white text-2xl font-bold p-3 rounded-md">
        Reset
      </button>
    </div>
  );
}

export default Counter;
