import React from "react";

export const IncrementComponent = React.memo(({ increment }) => {
  console.log("Me estoy redibujando");
  return (
    <>
      <button className="btn btn-success" onClick={() => increment(15)}>
        Incrementar +15
      </button>
    </>
  );
});
