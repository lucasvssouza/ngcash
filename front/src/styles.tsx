import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{ 
    padding: 0;
    margin: 0;
    font-family: "IBM Plex Sans",sans-serif;
  }
 `;

// Styled LogReg//
export const LogRegComponent = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  background-color: #000000;
`;
export const LogRegContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 400px;
  width: 380px;
  padding: 20px;

  background-color: #000000;
  border: 4px solid #ffffff;
  border-radius: 20px;
`;
export const LogRegTitle = styled.h1`
  font-size: 32px;
  color: #ffffff;

  margin: 20px;
`;
export const LogRegForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 294px;
`;
export const LogRegLabel = styled.div`
  font-size: 20px;
  color: #ffffff;

  margin: 15px 0px 5px;
`;
export const LogRegInput = styled.input`
  font-size: 16px;
  color: #ffffff;

  padding: 5px;
  width: 360px;

  margin-bottom: 5px;

  background-color: #000000;
  border: 2px solid #ffffff;
  border-radius: 5px;

  ::placeholder {
    color: #a09c9cec;
    opacity: 1;
  }
`;
export const LogRegRegister = styled.a`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  font-size: 16px;
  text-decoration: underline;

  color: #ffffff;

  margin: 5px 0px 0px 0px;
`;
export const LogRegButton = styled.button`
  align-self: end;
  cursor: pointer;

  font-size: 24px;
  color: #ffffff;

  background-color: #000000;
  border: double #ffffff 5px;
  border-radius: 20px;

  width: auto;
  height: auto;

  padding: 3px 10px 3px 10px;

  :hover {
    color: #000000;
    background-color: #ffffff;
    border: double #000000 5px;
  }
  :focus {
    color: #000000;
    background-color: #ffffff;
    border: double #000000 5px;
  }
`;
export const LogRegError = styled.div`
  font-size: 16px;
  color: #cc3c3c;
`;
// Styled LogReg//

//Styled Account//
export const AccountComponent = styled.div`
  display: flex;

  height: 100vh;
  width: 100vw;

  background-color: #000000;
  color:#ffffff;
`;
//Styled Account//
