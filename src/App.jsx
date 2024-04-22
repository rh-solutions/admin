import logo from "./assets/logo.png";
import "./App.css";
import ReactModal from "react-modal";
import { ModalLoginFacebook } from "./Modal/modal-login-facebook";
import { useState } from "react";
function App() {
  const [openModal, setOpenModal] = useState(false);

  const open = () => {
    console.log(openModal);
    setOpenModal(!openModal);
  };

  return (
    <div className="App">
      {/* Aqui comienza el contenedor del form de login*/}
      <div className="h-screen w-screen  bg-slate-50 items-center flex flex-col">
        <img alt="" className="xl:w-1/3  w-96 mt-20" src={logo}></img>
        <div className="h-96 w-96 bg-white shadow-lg flex  flex-col mt-20">
          <input
            placeholder="Nombre de usuario"
            className="border-b border-solid border-gray-400 p-2 mx-10 mt-5 bg-slate-100"
            type="text"
          />
          <input
            placeholder="Contraseña"
            className="border-b border-solid border-gray-400 p-2 mx-10 mt-5  bg-slate-100"
            type="text"
          />

          <button className="p-1 mt-8 bg-blue-900 mx-32 rounded-md text-white font-bold hover:bg-blue-600">
            Iniciar Sesión
          </button>
          <div className="flex flex-row my-5 items-center justify-center">
            <div className="w-40 h-px bg-slate-300"></div>
            <p className="pb-1 px-2 text-slate-400">o</p>
            <div className="w-40 h-px bg-slate-300"></div>
          </div>
          <div className="flex flex-col h-40">
            <div
              onClick={() => open()}
              className="flex flex-row rounded-xl  gap-3 font-bold hover:bg-blue-100 text-sm cursor-pointer p-2  border border-solid border-gray-300 justify-center mx-20"
            >
              <img
                alt=""
                src="https://cdn.icon-icons.com/icons2/2429/PNG/512/facebook_logo_icon_147291.png"
                className="w-5 h-5 rounded-sm "
              ></img>
              Continua con Facebook
            </div>

            <div className="flex flex-row gap-3 rounded-xl font-bold hover:bg-blue-100 text-sm cursor-pointer p-2 mt-2  border border-solid border-gray-300 justify-center mx-20">
              <img
                alt=""
                src="https://w7.pngwing.com/pngs/345/302/png-transparent-chat-slack-slack-logo-social-media-icon-thumbnail.png"
                className="w-5 h-5 rounded-sm "
              ></img>
              Continua con Slack
            </div>
          </div>
        </div>
        {openModal && (
          <ModalLoginFacebook
            closeAction={() => setOpenModal(false)}
          ></ModalLoginFacebook>
        )}
        <footer className=" flex  h-full items-end mb-3 text-gray-500">
          <p> ©2024 RH Solutions. All rights reserved</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
