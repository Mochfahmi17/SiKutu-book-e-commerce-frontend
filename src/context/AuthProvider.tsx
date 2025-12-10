import { useEffect, useState } from "react";
import type { AuthenticateStatusResponse, User, UserResponse } from "../types";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const serverUrl = import.meta.env.PROD
    ? import.meta.env.VITE_SERVER_URL
    : "http://localhost:3000";

  const getUserState = async () => {
    try {
      const res = await fetch(`${serverUrl}/api/user`, {
        credentials: "include",
      });

      const data: UserResponse = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setUser(data.data);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }

      throw error;
    }
  };

  const checkAuth = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${serverUrl}/api/auth/is-auth`, {
        credentials: "include",
      });

      const data: AuthenticateStatusResponse = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      setIsLoggedIn(true);
      await getUserState();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }

      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      checkAuth();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);

  const value = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
