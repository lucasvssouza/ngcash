import { createContext, ReactNode } from "react";

const Context = createContext<any>(null!);

type IProps = {
  children: ReactNode;
};

function AuthProvider({ children }: IProps) {
  return <Context.Provider value={{autenticated: false}}>{children}</Context.Provider>;
}

export { Context, AuthProvider };
