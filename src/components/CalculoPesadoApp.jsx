import { useState } from "react";

export const CalculoPesadoApp = () => {
  const [show, setShow] = useState(true);
  const [numList, setNumList] = useState([2, 3, 4, 5, 6, 7, 8, 9]);
  const getCalculo = (numList) => {
    console.log("Calculando...");
    return numList.reduce((a, b) => a * b);
  };
  return (
    <>
      <h2>Cálculos</h2>
      {show && <h4>El cálculo es: {getCalculo(numList)}</h4>}
      <button
        type="button"
        className="btn btn-info"
        onClick={() => setShow(!show)}
      >
        {show ? "¡Ocultar Cálculo!" : "Mostrar Cálculo"}
      </button>
    </>
  );
};
