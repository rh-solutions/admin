import "./App.css";
import { ModalLoginFacebook } from "./Modal/modal-login-facebook";
import { useState } from "react";
import { Login } from "./Routes/login";
import { Route, Routes } from "react-router-dom";
import Expediente from "./Routes/data";
function App() {
  const [openModal, setOpenModal] = useState(false);

  const open = () => {
    console.log(openModal);
    setOpenModal(!openModal);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/Evaluacion/ExpedienteCV" element={<Expediente />} />
      </Routes>
    </div>
  );
}

export default App;
