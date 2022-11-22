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
export const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 460px;
  width: 380px;
  padding: 20px;

  background-color: #000000;
  border: 4px solid #ffffff;
  border-radius: 20px;
`;
export const DefaultTitle = styled.h1`
  font-size: 32px;
  color: #ffffff;

  margin: 20px;
`;
export const DefaultForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 220px;
`;
export const DefaultLabel = styled.div`
  font-size: 20px;
  color: #ffffff;

  margin: 15px 10px 5px 0px;
`;
export const DefaultInput = styled.input`
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
export const ValueInput = styled.input`
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

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
export const DefaultButton = styled.button`
  align-self: end;
  cursor: pointer;

  margin: 20px;

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
  flex-direction: column;

  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  background-color: #000000;
  color: #ffffff;
`;
export const MainBalanceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const MainBalanceLabel = styled.label`
  font-size: 20px;
  color: #ffffff;
  margin: 5px;
`;
export const MainButtonDiv = styled.div`
  margin: 5px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 460px;
  width: 380px;
  padding: 20px;

  background-color: #000000;
  border: 4px solid #ffffff;
  border-radius: 20px;
`;
export const MainClose = styled.button`
  display: flex;
  position: absolute;
  align-self: end;
  justify-self: end;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  height: 30px;
  width: 30px;

  font-size: 24px;
  color: #ffffff;

  background-color: #000000;
  border: solid #ffffff 2px;
  border-radius: 20px;

  padding: 3px 10px 3px 10px;

  :hover {
    color: #000000;
    background-color: #ffffff;
    border: solid #000000 2px;
  }
  :focus {
    color: #000000;
    background-color: #ffffff;
    border: solid #000000 2px;
  }
`;
export const TransactionsFilter = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  border-bottom: 2px solid #000000;
`;
export const ActivedFillButton = styled.button`
  font-size: 16px;
  color: #000000;
  background-color: #ffffffff;

  cursor: pointer;
  border: none;

  width: 130px;
  height: 30px;

  padding: 5px;
`;
export const DesactivedFillButton = styled.button`
  font-size: 16px;
  color: #000000;
  background-color: #a8a6a6;

  cursor: pointer;
  border: none;

  width: 130px;
  height: 30px;

  padding: 5px;

  :hover {
    color: #ffffffff;
    background-color: #000000;
  }
  :focus {
    color: #ffffffff;
    background-color: #000000;
  }
`;
export const TransactionsTable = styled.table`
  border: 2px solid #ffffff;

  width: 100%;
  height: 229px;
`;
export const TransactionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  background-color: #a8a6a6;

  width: 100%;
  height: 189px;
`;
export const TransactionsTH = styled.th`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;

  width: 120px;
  height: 20px;
  padding: 5px;

  border-bottom: 2px solid #000000;

  background-color: #a8a6a6;
`;
export const TransactionsTD = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;

  flex: 1;
  height: 30px;

  padding: 5px 0px 5px;

  border-bottom: 2px solid #ffffff;
  background-color: #a8a6a6;
`;

export const TransactionsTR = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TransactionsError = styled.div`
  display: flex;

  align-items: center;

  font-size: 16px;
  color: #000000;

  width: 300px;
  height: 30px;

  padding: 5px 20px 7px 20px;

  background-color: #a8a6a6;
`;

//Styled Account//
