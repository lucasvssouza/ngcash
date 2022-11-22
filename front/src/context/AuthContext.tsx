import { createContext, ReactNode, useEffect, useState } from "react";

import { session } from "../api";

const Context = createContext<any>(null!);

type IProps = {
  children: ReactNode;
};

function AuthProvider({ children }: IProps) {
  const local = localStorage.getItem("?acessToken");
  const [token, setToken] = useState<string | null>(local);
  const [autorized, setAutorized] = useState<boolean>();
  const [data, setData] = useState<Object>();
  const [loading, setLoading] = useState<boolean>(true);

  const tokenCheck = async () => {
    try {
      const check = await session(token);
      setData(check.data);
      setAutorized(check.autorized);
      setLoading(check.loading);
    } catch {}
  };

  const tokenDestroy = () => {
    localStorage.removeItem("?acessToken");
    const baseURL = window.location.origin;
    window.location.href = baseURL + "/login";
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  return (
    <Context.Provider value={{ autorized, data, loading, token, tokenDestroy }}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };
