import React, { useCallback, useContext, useState } from "react";
import { transfer } from "../../api";
import { Context } from "../../context/AuthContext";
import {
  AccountComponent,
  MainBalanceContainer,
  DefaultLabel,
  MainContainer,
  DefaultTitle,
  DefaultInput,
  DefaultButton,
  MainButtonDiv,
  DefaultForm,
  LogRegError,
  ValueInput,
} from "../../styles";
import { currencyMask } from "./mask/currencyMask";

interface ICurrency {
  currency: string;
}

const CashOut = (): React.ReactElement => {
  const { autorized, data, loading, token } = useContext(Context);
  const [credited, setCredited] = useState<string>("");
  const [value, setValue] = useState<ICurrency>({ currency: "0.00" });

  const [checkCredited, setCheckCredited] = useState<string>("valido");
  const [checkValue, setCheckValue] = useState<string>("valido");

  const fixed = parseFloat(data.accountId.balance).toFixed(2);
  const emptyImput = "* Preencha esse campo";

  const handleMask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, currency: e.target.value });
  };

 
  const ValueError = (): JSX.Element => {
    if (checkValue === "insuficiente") {
      return <LogRegError>* Saldo insuficiente</LogRegError>;
    } else if (checkValue === "negativo") {
      return (
        <LogRegError>* Não é possível transferir saldo negativo</LogRegError>
      );
    } else {
      return <div style={{ height: "18px" }}></div>;
    }
  };
  const CreditedError = (): JSX.Element => {
    if (checkCredited === "vazio") {
      return <LogRegError>{emptyImput}</LogRegError>;
    } else if (checkCredited === "invalido") {
      return (
        <LogRegError>
          * Você não pode realizar uma transferencia pra si mesmo
        </LogRegError>
      );
    } else if (checkCredited === "errado") {
      return <LogRegError>* Nome de usuário não cadastrado</LogRegError>;
    } else {
      return <div style={{ height: "18px" }}></div>;
    }
  };

  const balance = () => {
    const newBalance = fixed.replace(".", ",");
    return newBalance;
  };

  const Transactions = async () => {
    const transValue = parseFloat(value.currency).toFixed(2).replace(",", ".");
    if (credited === "") {
      setCheckCredited("vazio");
    } else if (credited === data.username) {
      setCheckCredited("invalido");
    } else {
      setCheckCredited("valido");
    }
    if (+fixed < +transValue) {
      setCheckValue("insuficiente");
    } else if (+transValue <= 0) {
      setCheckValue("negativo");
    } else {
      setCheckValue("valido");
    }

    if (
      !(credited.trim() === "") &&
      +fixed >= +transValue &&
      !(credited === data.username) &&
      +transValue > 0
    ) {
      try {
        const response = await transfer(
          data.username,
          credited,
          transValue,
          token
        );
        if (response === 500) {
          setCheckCredited("errado");
        } else {
          setCheckCredited("valido");
          window.location.reload();
        }
      } catch {}
    } else {
    }
  };

  const Back = () => {
    const baseURL = window.location.origin;
    window.location.href = baseURL + "/home";
  };

  return (
    <AccountComponent>
      <MainContainer>
        <DefaultTitle>Transferência</DefaultTitle>
        <MainBalanceContainer>
          <DefaultLabel>Saldo Atual: </DefaultLabel>
          <DefaultLabel>R$ {balance()}</DefaultLabel>
        </MainBalanceContainer>
        <DefaultForm>
          <div>
            <DefaultLabel>
              <label>Destinatario</label>
            </DefaultLabel>
            <DefaultInput
              placeholder="Digite o nome do destinario..."
              value={credited}
              onChange={(e) => setCredited(e.target.value.replace(" ", ""))}
            />
            {CreditedError()}
            <DefaultLabel>
              <label>Valor</label>
            </DefaultLabel>
            <ValueInput
              placeholder="Valor a transferir..."
              value={value.currency}
              onChange={(e) => handleMask(currencyMask(e))}
            />
            {ValueError()}
          </div>
        </DefaultForm>
        <MainButtonDiv>
          <DefaultButton onClick={Back}>Voltar</DefaultButton>
          <DefaultButton onClick={Transactions}>Transferir</DefaultButton>
        </MainButtonDiv>
      </MainContainer>
    </AccountComponent>
  );
};

export default CashOut;
