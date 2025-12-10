import { createContext } from "react";
import type { User } from "../types";

type AuthContextType = {
  user: User | null;
  setUser: (userDetail: User | null) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
