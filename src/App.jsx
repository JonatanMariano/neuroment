import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Home from "./pages/Home.jsx";
import FirstAccess from "./pages/FirstAccess.jsx";
import ConfirmEmail from "./pages/ConfirmEmail.jsx";
import ConfirmSuccess from "./pages/ConfirmSuccess.jsx";
import DadosPessoais from "./pages/DadosPessoais.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/first-access" element={<FirstAccess />} />
        <Route path="/confirm-email" element={<ConfirmEmail />} />
        <Route path="/confirm-success" element={<ConfirmSuccess />} />
        <Route path="/dados-pessoais" element={<DadosPessoais />} />
      </Routes>
    </Router>
  );
}

export default App;
