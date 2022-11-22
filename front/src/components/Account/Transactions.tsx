import React,{ useContext, useEffect, useState } from "react";
import { history } from "../../api";
import { Context } from "../../context/AuthContext";
import {
  AccountComponent,
  MainContainer,
  DefaultTitle,
  MainButtonDiv,
  DefaultButton,
  TransactionsTable,
  TransactionsTH,
  TransactionsTD,
  TransactionsTR,
  TransactionsError,
  TransactionsContainer,
  TransactionsFilter,
  ActivedFillButton,
  DesactivedFillButton,
} from "../../styles";

const Transactions = (): React.ReactElement => {
  const { autorized, data, loading, token } = useContext(Context);
  const [transdata, setTransdata] = useState<any>("Carregando");
  const [list, setList] = useState<string>("full");

  const getHistory = async () => {
    try {
      const check = await history(data.accountId, token);
      setTransdata(check);
    } catch {}
  };

  useEffect(() => {
    getHistory();
  }, []);

  const fullButton = () => {
    setList("full");
  };
  const creditedButton = () => {
    setList("credited");
  };
  const debitedButton = () => {
    setList("debited");
  };

  const FullButton = () => {
    if (list === "full") {
      return <ActivedFillButton onClick={fullButton}>Todos</ActivedFillButton>;
    } else {
      return (
        <DesactivedFillButton onClick={fullButton}>Todos</DesactivedFillButton>
      );
    }
  };

  const DebitedButton = () => {
    if (list === "debited") {
      return (
        <ActivedFillButton onClick={debitedButton}>Cash-Out</ActivedFillButton>
      );
    } else {
      return (
        <DesactivedFillButton onClick={debitedButton}>
          Cash-Out
        </DesactivedFillButton>
      );
    }
  };

  const CreditedButton = () => {
    if (list === "credited") {
      return (
        <ActivedFillButton onClick={creditedButton}>Cash-In</ActivedFillButton>
      );
    } else {
      return (
        <DesactivedFillButton onClick={creditedButton}>
          Cash-In
        </DesactivedFillButton>
      );
    }
  };

  const DebitedList = () => {
    const { credited, debited } = transdata;

    if (debited.length > 0) {
      return (
        <div>
          {debited.map((data: any, key: string) => {
            return (
              <TransactionsTR key={key}>
                <TransactionsTD>Cash-Out</TransactionsTD>
                <TransactionsTD>{data.value}</TransactionsTD>
                <TransactionsTD>{data.createdAt}</TransactionsTD>
              </TransactionsTR>
            );
          })}
        </div>
      );
    } else if (list === "debited") {
      return <TransactionsError>Lista vázia</TransactionsError>;
    }
  };

  const CreditedList = () => {
    const { credited, debited } = transdata;
    if (credited.length > 0) {
      return (
        <div>
          {credited.map((data: any, key: string) => {
            return (
              <TransactionsTR key={key}>
                <TransactionsTD>Cash-In</TransactionsTD>
                <TransactionsTD>{data.value}</TransactionsTD>
                <TransactionsTD>{data.createdAt}</TransactionsTD>
              </TransactionsTR>
            );
          })}
        </div>
      );
    } else if (list === "credited") {
      return <TransactionsError>Lista vázia</TransactionsError>;
    }
  };

  const FullList = () => {
    const { credited, debited } = transdata;
    if (credited.length > 0 || debited.length > 0) {
      return (
        <div>
          {CreditedList()}
          {DebitedList()}
        </div>
      );
    } else {
      return <TransactionsError>Lista vázia</TransactionsError>;
    }
  };

  const List = () => {
    if (transdata === "Carregando") {
      return (
        <TransactionsContainer>
          <TransactionsError>Carregando aguarde...</TransactionsError>
        </TransactionsContainer>
      );
    } else {
      const { credited, debited } = transdata;
      if (list === "full") {
        return <TransactionsContainer>{FullList()}</TransactionsContainer>;
      }
      if (list === "debited") {
        return <TransactionsContainer>{DebitedList()}</TransactionsContainer>;
      }
      if (list === "credited") {
        return <TransactionsContainer>{CreditedList()}</TransactionsContainer>;
      }
    }
  };

  const Back = () => {
    const baseURL = window.location.origin;
    window.location.href = baseURL + "/home";
  };

  return (
    <AccountComponent>
      <MainContainer>
        <DefaultTitle>Histórico</DefaultTitle>
        <div>
          <TransactionsTable>
            <TransactionsFilter>
              {FullButton()}
              {DebitedButton()}
              {CreditedButton()}
            </TransactionsFilter>
            <TransactionsTR>
              <TransactionsTH>Ação</TransactionsTH>
              <TransactionsTH>Valor</TransactionsTH>
              <TransactionsTH>Data</TransactionsTH>
            </TransactionsTR>
            {List()}
          </TransactionsTable>
        </div>
        <MainButtonDiv>
          <DefaultButton onClick={Back}>Voltar</DefaultButton>
        </MainButtonDiv>
      </MainContainer>
    </AccountComponent>
  );
};

export default Transactions;
