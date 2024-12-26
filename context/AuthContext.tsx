import { createContext, useContext, useState } from "react";
export enum Role {
  MANAGER = "manager",
  STUDENT = "student",
  TEACHER = "teacher",
}
interface AuthProps {
  authState: {
    authenticated: boolean | null;
    username: string | null;
    role: Role | null;
  };
  onLogin: (username: string, password: string) => void;
  onLogout: () => void;
}
const AuthContext = createContext<Partial<AuthProps>>({});

export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }: any) => {
  const [authState, setAuthState] = useState<{
    authenticated: boolean | null;
    username: string | null;
    role: Role | null;
  }>({
    authenticated: null,
    username: null,
    role: null,
  });

  const login = (username: string, password: string): boolean => {
    if (username === "manage" && password === "manage") {
      setAuthState({
        authenticated: true,
        username: username,
        role: Role.MANAGER,
      });
      return true;
    } else if (username === "student" && password === "student") {
      setAuthState({
        authenticated: true,
        username: username,
        role: Role.STUDENT,
      });
      return true;
    } else if (username === "teacher" && password === "teacher") {
      setAuthState({
        authenticated: true,
        username: username,
        role: Role.TEACHER,
      });
      return true;
    } else {
      return false;
    }
  };

  const logout = async () => {
    setAuthState({
      authenticated: false,
      username: null,
      role: null,
    });
  };
  const value = {
    onLogin: login,
    onLogout: logout,
    authState,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
