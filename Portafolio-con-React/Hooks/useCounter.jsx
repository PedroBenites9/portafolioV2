import React from "react";

export const useCounter = () => {
  const [counter, setcounter] = useState(1);

  const contadorHandle = () => {
    counter + 1;
  };

  return (
    <>
      <button onClick={contador}>+1</button>
    </>
  );
};
