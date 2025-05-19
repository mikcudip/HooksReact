import { useMemo } from "react";
import { useState } from "react";

export const CalculoPesadoApp = () => {
  const [show, setShow] = useState(true);
  const [numList, setNumList] = useState([2, 3, 4, 5, 6, 7, 8, 9]);
  const getCalculo = (numList) => {
    console.log("Calculando...");
    return numList.reduce((a, b) => a * b);
  };
  const calcular = useMemo(() => getCalculo(numList), [numList]);
  const addNumber = () => {
    setNumList([...numList, numList[numList.length - 1] + 1]);
  };
  return (
    <>
      <h2>Cálculos</h2>
      {show && <h4>El cálculo es: {calcular}</h4>}
      {show && <h4>Los numeros base son: {numList}</h4>}
      <button className="btn btn-info" onClick={() => setShow(!show)}>
        {show ? "¡Ocultar Cálculo!" : "Mostrar Cálculo"}
      </button>
      <button className="btn btn-danger" onClick={() => addNumber()}>
        Agregar mas números
      </button>
    </>
  );
};
