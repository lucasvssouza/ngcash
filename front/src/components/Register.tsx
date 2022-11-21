import React,{ useState } from "react";
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

const Register = () => {
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [usercheck, setUsercheck] = useState<string>("valido");
  const [passwordcheck, setPasswordcheck] = useState<string>("valido");

  const emptyImput = "* Preencha esse campo"

  const UserError = (): JSX.Element => {
    if (usercheck === "vazio") {
      return <LogRegError>{emptyImput}</LogRegError>;
    } else if (usercheck === "invalido") {
      return <LogRegError>* Nome de usuário já em uso</LogRegError>;
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

  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) => {
    const regEx = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

    if (password === "") {
      setPasswordcheck("vazio");
    } else if (regEx.test(password.trim()) === false) {
      setPasswordcheck("invalido");
    } else {
      setPasswordcheck("valido");
    }

    if (user.trim() === "") {
      setUsercheck("vazio");
    } else if (user.length <= 2) {
      setUsercheck("pequeno");
    } else {
      setUsercheck("valido");
    }

    e.preventDefault();
  };

  return (
    <LogRegComponent>
      <LogRegContainer>
        <LogRegTitle>Cadastro NG.CASH</LogRegTitle>
        <LogRegForm onSubmit={submitForm}>
          <div>
            <LogRegLabel>
              <label>Usuário</label>
            </LogRegLabel>
            <LogRegInput
              placeholder="Digite um nome de usuário..."
              value={user}
              onChange={(e) => setUser(e.target.value.replace(" ", ""))}
            ></LogRegInput>
            {UserError()}
            <LogRegLabel>
              <label>Senha</label>
            </LogRegLabel>
            <LogRegInput
              placeholder="Digite uma senha..."
              value={password}
              onChange={(e) => setPassword(e.target.value.replace(" ", ""))}
              type="password"
            ></LogRegInput>
            {PasswordError()}
            <LogRegRegister href="/login">
              Já possue uma conta? Faça o login!
            </LogRegRegister>
          </div>
          <LogRegButton type="submit">Cadrastrar</LogRegButton>
        </LogRegForm>
      </LogRegContainer>
    </LogRegComponent>
  );
};

export default Register;
