"use client";

import { User } from "@/actions/get-user";
import { logout } from "@/actions/logout";
import validateToken from "@/actions/validate-token";
import React, { createContext, useContext, useEffect, useState } from "react";

interface UserContextProps {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [userState, setUserState] = useState<User | null>(user);

  useEffect(() => {
    async function validate() {
      const { ok } = await validateToken();
      if (!ok) logout();
    }

    if (userState) validate();
  }, [userState]);

  return (
    <UserContext.Provider
      value={{ user: userState, setUser: setUserState } as UserContextProps}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
