const addTwoNumbers = (a: number, b: number) => {
  return a + b;
};

export const BasicFunctions = () => {
  return (
    <>
      <h3>Funciones</h3>
      <span>EL resultado de sumar 3 + 8 = {addTwoNumbers(3, 8)}</span>
    </>
  );
};
