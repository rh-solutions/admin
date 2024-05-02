import React, { useState } from "react";
import logo from "../assets/icon.jpg";
import { MdLogout } from "react-icons/md";
import {
  Button,
  Divider,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import { IoPersonCircle } from "react-icons/io5";

const Expediente = () => {
  const [isUpdated, setIsUpdated] = useState(false);

  return (
    <div className="h-screen w-screen  bg-slate-50 items-center flex flex-col">
      <div className="bg-blue-500 w-full h-16 flex">
        <div className="flex w-1/3">
          <img alt="" className=" ml-10" src={logo}></img>
        </div>
        <div className="flex w-1/3"></div>
        <div className="flex w-1/3 justify-end mr-16">
          <button className="hover:bg-blue-400 rounded-full p-2">
            <MdLogout color="white" size={25} />
          </button>
        </div>
      </div>
      <Snackbar
        open={isUpdated}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={3000}
        message="Se actualizo correctamente la información"
      />
      <div className="flex flex-row space-x-16 w-full px-10">
        <div className="h-auto w-full bg-white shadow-md flex  flex-col my-14 ml-5 ">
          <div className=" w-full justify-center items-center text-center">
            {/* Aqui termina el item de steps */}
            <div className=" w-full h-max">
              <div className="w-full justify-center flex flex-row h-max  bg-slate-400 border-b-2 border-gray-400">
                <div className="w-full flex bg-slate-300 text-left px-10 py-5 cursor-pointer select-none">
                  <div className="w-1/3 ml-10 font-semibold">
                    <h2> Test PAS Buscadores de Sensaciones</h2>
                  </div>
                  <div className="w-1/3 text-center">
                    <h2> Tiempo: 10:00 min</h2>
                  </div>
                  <div className="w-1/3 text-right">
                    <span className="p-2 px-4 rounded-full text-red-700 ">
                      Pendiente
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full justify-center flex flex-row h-max  bg-slate-400 border-b-2 border-gray-400">
                <div className="w-full flex bg-slate-300 text-left px-10 py-5 cursor-pointer select-none">
                  <div className="w-1/3 ml-10 font-semibold">
                    <h2> Test PAS Buscadores de Sensaciones</h2>
                  </div>
                  <div className="w-1/3 text-center">
                    <h2> Tiempo: 10:00 min</h2>
                  </div>
                  <div className="w-1/3 text-right">
                    <span className="p-2 px-4 rounded-full text-green-600">
                      Completado
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full justify-center flex flex-row h-max  bg-slate-400 border-b-2 border-gray-400">
                <div className="w-full flex bg-slate-300 text-left px-10 py-5 cursor-pointer select-none">
                  <div className="w-1/3 ml-10 font-semibold">
                    <h2> Test PAS Buscadores de Sensaciones</h2>
                  </div>
                  <div className="w-1/3 text-center">
                    <h2> Tiempo: 10:00 min</h2>
                  </div>
                  <div className="w-1/3 text-right">
                    <span className="p-2 px-4 rounded-full text-red-700 ">
                      Pendiente
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/12 h-auto bg-white pb-10 shadow-md flex  flex-col my-14">
          <div className="w-full justify-center flex     h-max ">
            <IoPersonCircle className="w-52 h-52" />
          </div>
          <div className="flex flex-col mx-16 text-left space-y-5">
            <FormControl className="mx-10">
              <p>Nombres:</p>
              <TextField size="small" />
            </FormControl>
            <FormControl className="mx-10">
              <p>Apellidos:</p>
              <TextField size="small" />
            </FormControl>
            <FormControl className="mx-10">
              <p>Correo electronico:</p>
              <TextField size="small" />
            </FormControl>
            <FormControl className="mx-10">
              <p>No. Celular:</p>
              <TextField disabled value={"hola como estan"} size="small" />
            </FormControl>

            <button className="p-1 mt-8 bg-blue-900  rounded-md max-w-30 text-white font-bold hover:bg-blue-600 ">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expediente;
