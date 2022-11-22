import React, { useState } from "react";
import {
  LogRegComponent,
  DefaultContainer,
  DefaultTitle,
  DefaultForm,
  DefaultLabel,
  DefaultInput,
  LogRegRegister,
  DefaultButton,
  LogRegError,
} from "../styles";
import { register } from "../api";

const Register = (): React.ReactElement => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [usercheck, setUsercheck] = useState<string>("valido");
  const [passwordcheck, setPasswordcheck] = useState<string>("valido");

  const emptyImput = "* Preencha esse campo";

  const UserError = (): JSX.Element => {
    if (usercheck === "vazio") {
      return <LogRegError>{emptyImput}</LogRegError>;
    } else if (usercheck === "invalido") {
      return <LogRegError>* Nome de usuário já cadrastrado</LogRegError>;
    } else if (usercheck === "pequeno") {
      return <LogRegError>* O nome de usuário é muito curto</LogRegError>;
    } else {
      return <div style={{ height: "18px" }}></div>;
    }
  };

  const PasswordError = (): JSX.Element => {
    if (passwordcheck === "invalido") {
      return (
        <LogRegError>
          * Sua senha deve conter 8 caracteres, um número e uma letra maiúscula
        </LogRegError>
      );
    } else if (passwordcheck === "vazio") {
      return <LogRegError>{emptyImput}</LogRegError>;
    } else {
      return <div></div>;
    }
  };

  const submitForm = async () => {
    const regEx = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

    if (user.trim() === "") {
      setUsercheck("vazio");
    } else if (user.length <= 2) {
      setUsercheck("pequeno");
    } else {
      setUsercheck("valido");
    }

    if (password === "") {
      setPasswordcheck("vazio");
    } else if (regEx.test(password.trim()) === false) {
      setPasswordcheck("invalido");
    } else {
      setPasswordcheck("valido");
    }

    if (
      !(user.trim() === "") &&
      user.length >= 3 &&
      !(password === "") &&
      regEx.test(password.trim()) === true
    ) {
      try {
        const data = await register(user, password);
        if (data === 500) {
          setUsercheck("invalido");
        } else {
          const baseURL = window.location.origin;
          window.location.href = baseURL + "/login";
        }
      } catch {}
    }
  };

  return (
    <LogRegComponent>
      <DefaultContainer>
        <DefaultTitle>Cadastro NG.CASH</DefaultTitle>
        <DefaultForm>
          <div>
            <DefaultLabel>
              <label>Usuário</label>
            </DefaultLabel>
            <DefaultInput
              placeholder="Digite um nome de usuário..."
              value={user}
              onChange={(e) => setUser(e.target.value.replace(" ", ""))}
            ></DefaultInput>
            {UserError()}
            <DefaultLabel>
              <label>Senha</label>
            </DefaultLabel>
            <DefaultInput
              placeholder="Digite uma senha..."
              value={password}
              onChange={(e) => setPassword(e.target.value.replace(" ", ""))}
              type="password"
            ></DefaultInput>
            {PasswordError()}
            <LogRegRegister href="/login">
              Já possue uma conta? Faça o login!
            </LogRegRegister>
          </div>
        </DefaultForm>
        <DefaultButton type="button" onClick={submitForm}>
          Cadrastrar
        </DefaultButton>
      </DefaultContainer>
    </LogRegComponent>
  );
};

export default Register;
