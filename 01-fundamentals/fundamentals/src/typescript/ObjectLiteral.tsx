interface Person {
  age: number;
  firstName: string;
  lastName: string;
  address: Address;
}

interface Address {
  country: string;
  houseNo: string;
  street?: string;
}

export const ObjectLiteral = () => {
  const person: Person = {
    age: 35,
    firstName: "Andres",
    lastName: "Leon",
    address: {
      country: "Mexico",
      houseNo: "198",
    },
  };
  return (
    <>
      <div>ObjectLiteral</div>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
