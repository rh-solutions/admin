import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const RegisterOK = () => {
  return (
    <div className="w-full justify-center  items-center flex flex-col h-full mt-10">
      <IoCheckmarkCircleOutline size={130} className="  text-green-500" />
      <h2 className="font-medium text-lg">Te has registrado correctamente</h2>
      <p>En breve recibiras un correo electronico para activar tu cuenta.</p>
      <p>Puede tardar algunos minutos.</p>

      <Link
        to={"/"}
        className="p-2 mb-10 mt-8 bg-blue-600 mx-32 rounded-md text-white font-bold hover:bg-blue-600 disabled:bg-slate-400"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default RegisterOK;
