import { useState } from "react";
import { useCallback } from "react";
import { IncrementComponent } from "./IncrementComponent";

export const CallbackComponent = () => {
  const [counter, setCounter] = useState(0);
  const incrementParent = useCallback((val) => {
    setCounter((c) => c + val);
  }, []);
  return (
    <>
      <h1>Contador: {counter}</h1>
      <IncrementComponent increment={incrementParent} />
    </>
  );
};
