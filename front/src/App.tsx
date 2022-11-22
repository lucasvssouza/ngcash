import { AuthProvider } from "./context/AuthContext";
import { GlobalStyle } from "./styles";
import MainApp from "./components/MainApp";

function App() {

  return (
    <AuthProvider>
      <GlobalStyle />
      <MainApp />
    </AuthProvider>
  );
}

export default App;
