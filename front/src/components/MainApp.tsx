import React,{ useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from "../context/AuthContext";
import Main from "./Account/Main";
import CashOut from "./Account/CashOut";
import Login from "./Login";
import Register from "./Register";
import Transactions from "./Account/Transactions";
import {AccountComponent} from "../styles"

const MainApp = (): React.ReactElement => {
  const { autorized, data, loading } = useContext(Context);
  const Private = () => {
    return autorized ? (
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/login" element={<Main />} />
        <Route path="/register" element={<Main />} />

        <Route path="/home" element={<Main />} />
        <Route path="/transfer" element={<CashOut/>} />
        <Route path="/history" element={<Transactions/>} />
      </Routes>
    ) : (
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  };

  const Loading = () => {
    return loading ? <AccountComponent></AccountComponent> : <Private />;
  };
  return (
    <div>
      <Loading />
    </div>
  );
};

export default MainApp;
