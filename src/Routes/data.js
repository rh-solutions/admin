import React from "react";
import logo from "../assets/icon.jpg";
import { MdLogout } from "react-icons/md";

const Expediente = () => {
  return (
    <div className="h-screen w-screen  bg-slate-50 items-center flex flex-col">
      <div className="bg-blue-500 w-full h-16 flex">
        <div className="flex w-1/3">
          <img alt="" className="w-10 ml-10" src={logo}></img>
        </div>
        <div className="flex w-1/3"></div>
        <div className="flex w-1/3 justify-end mr-16">
          <button className="hover:bg-blue-400 rounded-full p-2">
            <MdLogout color="white" size={28} />
          </button>
        </div>
      </div>

      <div className="h-full w-11/12 bg-white shadow-md flex  flex-col my-14">
        <div className="flex w-full justify-center items-center text-center">
          <ol class="flex items-center justify-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white  rounded-lg shadow-sm  sm:text-base  sm:p-4 sm:space-x-4 rtl:space-x-reverse">
            <li class="flex items-center text-blue-600 dark:text-blue-500">
              <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                1
              </span>
              Información{" "}
              <span class="hidden sm:inline-flex sm:ms-2">Personal</span>
              <svg
                class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 12 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m7 9 4-4-4-4M1 9l4-4-4-4"
                />
              </svg>
            </li>
            <li class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                2
              </span>
              Educación
              <svg
                class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 12 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m7 9 4-4-4-4M1 9l4-4-4-4"
                />
              </svg>
            </li>
            <li class="flex items-center">
              <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                3
              </span>
              Laboral
            </li>
          </ol>
        </div>
        <div className="flex">
          <div className="w-1/3 bg-slate-500">
            <select>
              <option>Masculino</option>
              <option>Femenino</option>
            </select>
          </div>
          <div className="w-1/3 bg-slate-500"></div>
          <div className="w-1/3 bg-slate-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Expediente;
