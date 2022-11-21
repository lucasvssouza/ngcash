import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import { AuthProvider } from "./context/AuthContext";
import { GlobalStyle } from "./styles";

const Private = ({Item}:any) => {
  const signed = true
  
  return signed ? <Account />:<Login />;
}

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Private />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
