import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Checkbox, CircularProgress } from "@mui/material";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
import { app } from "../firebaseConfig";
import RegisterOK from "./register-ok";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErro] = useState(false);
  const [tries, setTries] = useState(0);

  const db = getFirestore(app);
  const [validForm, setValidForm] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
    code: "",
    isValid: false,
  });

  const validateForm = () => {
    if (form.email === "" || form.password === "" || form.code === "") {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  };

  const getData = async () => {
    const ref = collection(db, "datos");
    const snapshot = await getDocs(ref);
    const list = snapshot.docs;
    list.map((doc) => {
      console.log(doc.data());
    });
  };

  const createRegister = async () => {
    if (tries < 2) {
      setErro(true);
    } else {
      setIsLoading(true);

      const data = await addDoc(collection(db, "datos"), form);
      setTimeout(() => {
        setIsLoading(false);
        setIsRegister(true);
      }, 2500);
    }

    setTries(tries + 1);
  };

  useEffect(() => {
    getData();
  }, [""]);

  const handleChange = (event) => {
    const target = event.target;
    setErro(false);
    setForm({ ...form, [target.name]: target.value });
    setTimeout(() => {
      validateForm();
    }, 500);
  };

  return (
    <div className="h-screen w-screen  bg-slate-50 items-center flex flex-col">
      <div className="w-full  flex justify-center pt-10">
        <img className="w-48" src={logo}></img>
      </div>

      {isLoading ? (
        <CircularProgress className="mt-36"></CircularProgress>
      ) : (
        <div>
          <div>
            {isRegister ? (
              <RegisterOK></RegisterOK>
            ) : (
              <div className="h-max  bg-white shadow-lg flex  flex-col mt-14">
                <h2 className="font-bold text-3xl mt-5">
                  Formulario de registro
                </h2>
                <p>Registro de aspirantes</p>
                <div className="sm:mx-0 sm:flex  md:mx-5">
                  <input
                    placeholder="Nombre"
                    className=" border border-solid rounded-sm border-gray-400 p-2 mx-2 mt-5 "
                    type="text"
                  />
                  <input
                    placeholder="Apellidos"
                    className="border border-solid rounded-sm border-gray-400 p-2 mx-2 mt-5  "
                    type="text"
                  />
                </div>

                <div className="px-7 text-left">
                  <input
                    onChange={($event) => handleChange($event)}
                    value={form.email}
                    placeholder="Correo"
                    name="email"
                    className="w-full border border-solid rounded-sm border-gray-400 p-2  mt-5  "
                    type="text"
                  />
                  <input
                    name="password"
                    value={form.password}
                    onChange={($event) => handleChange($event)}
                    placeholder="Contraseña"
                    className="w-full border border-solid rounded-sm border-gray-400 p-2  mt-5  "
                    type={showPassword ? "text" : "password"}
                  />
                  <p c>
                    <Checkbox onChange={() => setShowPassword(!showPassword)} />{" "}
                    Mostrar contraseña
                  </p>
                  {error && (
                    <div className="bg-red-400 text-center mt-2 border-2 border-red-700">
                      La contraseña no cumple los requisitos de seguridad
                    </div>
                  )}

                  <div className="mt-16">
                    Codigo de registro
                    <input
                      name="code"
                      value={form.code}
                      onChange={($event) => handleChange($event)}
                      placeholder="Codigo"
                      className="w-full border border-solid rounded-sm border-gray-400 p-2  mt-1  "
                      type="text"
                    />
                  </div>
                </div>

                <button
                  onClick={() => createRegister()}
                  disabled={!validForm}
                  className="p-1 mb-10 mt-8 bg-blue-900 mx-32 rounded-md text-white font-bold hover:bg-blue-600 disabled:bg-slate-400"
                >
                  Registrarse
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
