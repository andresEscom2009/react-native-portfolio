export const BasicTypes = () => {
  const name: string = "Andres";
  const age: number = 35;
  const isActive: boolean = false;

  const powers: string[] = ["React", "RN", "Android"];

  return (
    <>
      <h3>Tipos básicos</h3>
      {name} - {age} - {isActive ? "Activo" : "No activo"}
      <p>{powers.join(", ")}</p>
    </>
  );
};
