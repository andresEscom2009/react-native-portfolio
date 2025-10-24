import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { user, isChecking, isAuthenticated, loginWithEmailPassword, logout } =
    useAuthContext();

  if (isChecking) {
    return <h1> Verifiyng user...</h1>;
  }
  return (
    <>
      {isAuthenticated ? (
        <>
          <h3>Bienvenido</h3>
          {JSON.stringify(user, null, 2)}
          <button
            onClick={() => logout()}
            className="bg-blue-500 p-4 text-white rounded-xl mt-2"
          >
            Salir
          </button>
        </>
      ) : (
        <>
          <h3>Ingresar a la aplicacion</h3>
          <button
            onClick={() =>
              loginWithEmailPassword("andres2009escom@gmail.com", "123456")
            }
            className="bg-blue-500 p-4 text-white rounded-xl mt-2"
          >
            Ingresar
          </button>
        </>
      )}
    </>
  );
};
