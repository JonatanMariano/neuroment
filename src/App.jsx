import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Home from "./pages/Home.jsx";
import FirstAccess from "./pages/FirstAccess.jsx";
import ConfirmEmail from "./pages/ConfirmEmail.jsx";
import ConfirmSuccess from "./pages/ConfirmSuccess.jsx";
import DadosPessoais from "./pages/DadosPessoais.jsx";
import Quest1 from "./pages/Quest1.jsx";
import Quest2 from "./pages/Quest2.jsx";
import Quest3 from "./pages/Quest3.jsx";  
import Quest4 from "./pages/Quest4.jsx";  
import Quest5 from "./pages/Quest5.jsx";
import Planos from "./pages/Planos.jsx";

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
        <Route path="/questionario-1" element={<Quest1 />} />
        <Route path="/questionario-2" element={<Quest2 />} />
        <Route path="/questionario-3" element={<Quest3 />} />
        <Route path="/questionario-4" element={<Quest4 />} />
        <Route path="/questionario-5" element={<Quest5 />} />
        <Route path="/planos" element={<Planos/>} />
      </Routes>
    </Router>
  );
}

export default App;
