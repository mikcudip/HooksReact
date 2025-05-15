import { useRef } from "react";
import { useState } from "react";

export const CounterApp = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const increment = () => {
    setCount((c) => c + 1);
    countRef.current += 1;
  };
  return (
    <>
      <h1>Counter: </h1>
      <h4>{count}</h4>
      <h4>{countRef.current}</h4>
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>
    </>
  );
};
