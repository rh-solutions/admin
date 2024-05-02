import React from "react";
import logo from "../assets/icon.jpg";
import { MdLogout } from "react-icons/md";
import { Checkbox, Divider, FormGroup } from "@mui/material";
import { TestPas } from "./datosTest";

const TestComponent = () => {
  const answers = [
    "Totalmente en desacuerdo",
    "Algo en desacuerdo",
    "En parte en desacuerdo / en parte de acuerdo",
    "Algo de acuerdo	",
    "Totalmente de acuerdo",
  ];

  return (
    <div className="h-max w-screen  bg-slate-50 items-center flex flex-col ">
      <div className="bg-blue-500 w-full h-16 flex overflow-x-hidden">
        <div className="flex w-1/3">
          <img alt="" className=" ml-10" src={logo}></img>
        </div>
        <div className="flex w-1/3"></div>
        <div className="flex w-1/3 justify-end mr-16">
          <button className="hover:bg-blue-400 rounded-full p-2">
            <MdLogout color="white" size={28} />
          </button>
        </div>
      </div>
      <textarea
        disabled
        rows={4}
        className="w-3/4 h-auto mt-10 bg-gray-200/50 text-gray-800 p-2 border-gray-700  resize-none "
        placeholder="El siguiente es un test de personalidad, donde no hay respuestas correctas o incorrectas, tomate tu tiempo para meditar cual es la opcion correcta para cada uno de los casos que se te plantean y no tengas miedo a equivocarte, la informacion es completamente privada y se usara para determinar solo los rasgos mas caracteristicos de tu personalidad. Marca la casilla de la respuesta con la que te sientas identificada (Solo se puede marcar una respuesta por cada pregunta). Al terminar todas las preguntas da click en el boton enviar y espera indicaciones de tu asesor/a."
      ></textarea>
      <div className="w-4/5 bg-white flex flex-row m-10 pb-10  h-full  shadow-lg px-10 ">
        <div className="flex flex-col w-full mx-10 text-left ">
          {TestPas.map((item, index) => {
            return (
              <>
                <h2 className="font-bold text-lg ml-2 my-5">
                  {index + 1}.- {item.text}{" "}
                  <span className="text-red-800">(Obligatorio)</span>
                </h2>
                <FormGroup
                  className="bg-gray-200  flex w-full"
                  style={{ flexDirection: "row" }}
                >
                  {answers.map((option) => {
                    return (
                      <div
                        className="bg-gray-300 w-1/5  flex justify-between  flex-col"
                        style={{ border: "solid 2px", borderColor: "#C2C2C2" }}
                      >
                        <h2 className="font-bold text-md  text-center align-middle">
                          {option}
                        </h2>
                        <div className=" h-max bg-slate-50 justify-center text-center">
                          <Checkbox size="small"></Checkbox>
                        </div>
                      </div>
                    );
                  })}
                </FormGroup>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
