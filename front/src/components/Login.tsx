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
import { login } from "../api";

const Login = (): React.ReactElement => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [usercheck, setUsercheck] = useState<string>("valido");
  const [passwordcheck, setPasswordcheck] = useState<string>("valido");

  const emptyImput = "* Preencha esse campo";

  const UserError = (): JSX.Element => {
    if (usercheck === "vazio") {
      return <LogRegError>{emptyImput}</LogRegError>;
    } else if (usercheck === "invalido") {
      return <LogRegError>* Usuário ou senha invalidos</LogRegError>;
    } else {
      return <div style={{ height: "18px" }}></div>;
    }
  };

  const PasswordError = (): JSX.Element => {
    if (passwordcheck === "vazio") {
      return <LogRegError>{emptyImput}</LogRegError>;
    } else {
      return <div></div>;
    }
  };

  const submitForm = async () => {
    if (password === "") {
      setPasswordcheck("vazio");
    } else {
      setPasswordcheck("valido");
    }

    if (user.trim() === "") {
      setUsercheck("vazio");
    } else {
      setUsercheck("valido");
    }

    if (!(user.trim() === "") && !(password === "")) {
      try {
        const data = await login(user, password);
        if (data === 500) {
          setUsercheck("invalido");
        } else {
          localStorage.setItem("?acessToken", data);
          const baseURL = window.location.origin;
          window.location.href = baseURL + "/home";
        }
      } catch {}
    }
  };

  return (
    <LogRegComponent>
      <DefaultContainer>
        <DefaultTitle>Login NG.CASH</DefaultTitle>
        <DefaultForm>
          <div>
            <DefaultLabel>
              <label>Usuário</label>
            </DefaultLabel>
            <DefaultInput
              placeholder="Digite seu nome de usuário..."
              value={user}
              onChange={(e) => setUser(e.target.value.replace(" ", ""))}
            ></DefaultInput>
            {UserError()}
            <DefaultLabel>
              <label>Senha</label>
            </DefaultLabel>
            <DefaultInput
              placeholder="Digite sua senha..."
              value={password}
              onChange={(e) => setPassword(e.target.value.replace(" ", ""))}
              type="password"
            ></DefaultInput>
            {PasswordError()}
            <LogRegRegister href="/register">
              Não possue uma conta? Cadraste-se!
            </LogRegRegister>
          </div>
        </DefaultForm>
        <DefaultButton type="button" onClick={submitForm}>
          Entrar
        </DefaultButton>
      </DefaultContainer>
    </LogRegComponent>
  );
};

export default Login;
