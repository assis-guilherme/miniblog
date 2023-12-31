import { useContext, createContext } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children, value }) {
  return (
    <AuthContext.Provider value={value} children={children}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthValue() {
  return useContext(AuthContext);
}
