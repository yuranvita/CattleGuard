import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import Toast from "react-native-toast-message";
import { api } from "../infra/service/api";
import { useSail } from "../utils/reactFunctions";

interface AuthContextType {
  signIn: (data: any) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { navigate } = useSail();

  const signIn = async (data: any) => {
    await api
      .post("/login", data)
      .then((res) => {
        AsyncStorage.setItem("token", res.data.token);
        console.log(res.data);
      })
      .catch((err) => {
        Toast.show({
          type: "error",
          text1: err.response.data.message,
        });
      });
  };

  const signOut = () => {
    // Aqui, você pode chamar uma API para fazer logout se necessário
  };

  useEffect(() => {
    AsyncStorage.getItem("token").then((token) => {
      if (token) {
        return navigate("home" as never);
      }
      return navigate("login" as never);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
