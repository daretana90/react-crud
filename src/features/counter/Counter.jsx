import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
// import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1>Counter</h1>
        <button onClick={() => dispatch(increment())}>+ INCREMENT</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>- DECREMENT</button>
      </div>
    </>
  );
}
