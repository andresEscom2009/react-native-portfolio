import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

enum AuthStatus {
  "checking" = "checking",
  "authenticated" = "authenticated",
  "unauthenticated" = "unauthenticated",
}

interface User {
  name: string;
  email: string;
}

interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  isChecking: boolean;
  isAuthenticated: boolean;

  loginWithEmailPassword: (email: string, password: string) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.checking);
  const [user, setuser] = useState<User>();

  const loginWithEmailPassword = (email: string, password: string) => {
    console.log(password);

    setuser({
      name: "Andres Leon",
      email: email,
    });
    setStatus(AuthStatus.authenticated);
  };

  useEffect(() => {
    setTimeout(() => {
      setStatus(AuthStatus.unauthenticated);
    }, 1500);
  }, []);

  const logout = () => {
    setuser(undefined);
    setStatus(AuthStatus.unauthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        status: status,
        user: user,

        //Getters
        isChecking: status === AuthStatus.checking,
        isAuthenticated: status === AuthStatus.authenticated,

        //Methods
        loginWithEmailPassword: loginWithEmailPassword,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
