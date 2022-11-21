import React, { useState } from "react";
import {
  LogRegComponent,
  LogRegContainer,
  LogRegTitle,
  LogRegForm,
  LogRegLabel,
  LogRegInput,
  LogRegRegister,
  LogRegButton,
  LogRegError,
} from "../styles";

const Login = () => {
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

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    if (password === "") {
      setPasswordcheck("vazio");
    } else {
      setPasswordcheck("valido");
    }

    e.preventDefault();
    if (user.trim() === "") {
      setUsercheck("vazio");
    } else {
      setUsercheck("valido");
    }
  };

  return (
    <LogRegComponent>
      <LogRegContainer>
        <LogRegTitle>Login NG.CASH</LogRegTitle>
        <LogRegForm onSubmit={submitForm}>
          <div>
            <LogRegLabel>
              <label>Usuário</label>
            </LogRegLabel>
            <LogRegInput
              placeholder="Digite seu nome de usuário..."
              value={user}
              onChange={(e) => setUser(e.target.value.replace(" ", ""))}
            ></LogRegInput>
            {UserError()}
            <LogRegLabel>
              <label>Senha</label>
            </LogRegLabel>
            <LogRegInput
              placeholder="Digite sua senha..."
              value={password}
              onChange={(e) => setPassword(e.target.value.replace(" ", ""))}
              type="password"
            ></LogRegInput>
            {PasswordError()}
            <LogRegRegister href="/register">
              Não possue uma conta? Cadraste-se!
            </LogRegRegister>
          </div>
          <LogRegButton type="submit">Entrar</LogRegButton>
        </LogRegForm>
      </LogRegContainer>
    </LogRegComponent>
  );
};

export default Login;
