"use client";

import { IUserItem } from "@/features/users/types";
import { createContext, useContext } from "react";

const AuthContext = createContext<IUserItem | null>(null);

export const AuthProvider = ({
  children,
  user,
}: {
  children: React.ReactNode;
  user: IUserItem | null;
}) => {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
