import React, { useContext } from "react";
import { Context } from "../../context/AuthContext";
import {
  AccountComponent,
  DefaultTitle,
  MainContainer,
  MainBalanceContainer,
  DefaultLabel,
  MainButtonDiv,
  DefaultButton,
  MainClose,
} from "../../styles";

const Main = (): React.ReactElement => {
  const { autorized, data, loading, token, tokenDestroy } = useContext(Context);

  const balance = () => {
    const fixed = parseFloat(data.accountId.balance).toFixed(2).toString();
    const newBalance = fixed.replace(".", ",");
    return newBalance;
  };

  const transactions = () => {
    const baseURL = window.location.origin;
    window.location.href = baseURL + "/transfer";
  };

  const history = () => {
    const baseURL = window.location.origin;
    window.location.href = baseURL + "/history";
  };

  const close = () => {
    tokenDestroy();
  };
  return (
    <AccountComponent>
      <MainContainer>
        <MainClose onClick={close}>X</MainClose>

        <DefaultTitle>Olá {data.username}</DefaultTitle>

        <MainBalanceContainer>
          <DefaultLabel>Saldo Atual: </DefaultLabel>
          <DefaultLabel>R$ {balance()}</DefaultLabel>
        </MainBalanceContainer>
        <MainButtonDiv>
          <DefaultButton onClick={transactions}>Transferir</DefaultButton>
          <DefaultButton onClick={history}>Histórico</DefaultButton>
        </MainButtonDiv>
      </MainContainer>
    </AccountComponent>
  );
};

export default Main;
