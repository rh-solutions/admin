import "./App.css";
import { ModalLoginFacebook } from "./Modal/modal-login-facebook";
import { useState } from "react";
import { Login } from "./Routes/login";
import { Route, Routes } from "react-router-dom";
import Expediente from "./Routes/formList";
import { IoMenu } from "react-icons/io5";
import Register from "./Routes/register";
import TestComponent from "./Routes/testComponent";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Login />} />
        <Route path="admin/register" element={<Register />}></Route>
        <Route path="/admin/test" element={<Expediente />} />
        <Route path="/admin/test/:id" element={<TestComponent />} />
      </Routes>
    </div>
  );
}

export default App;
