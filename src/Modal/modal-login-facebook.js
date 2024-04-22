import React from "react";
import Draggable from "react-draggable";
import { FaFacebookSquare } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { FaRegSquare } from "react-icons/fa6";

export const ModalLoginFacebook = ({ closeAction }) => {
  return (
    <Draggable>
      <div className="animate-fade absolute shadow-xl shadow-neutral-400/80 top-36 left-96 right-3 h-1/2 lg:w-2/4 xl:w-1/3  md:w-3/5 bg-white rounded-md border border-blue-600/80 text-wrap">
        <div
          className="w-full h-7 bg-black rounded-t-md flex flex-row "
          style={{ justifyContent: "space-between" }}
        >
          <span className="flex justify-center items-center ml-2 font-light  text-sm text-white  ">
            <img
              className="w-4 mr-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
            ></img>{" "}
            Facebook - Google chrome
          </span>
          <div className="flex">
            <div className="h-full w-11 flex text-white text-md justify-center items-center hover:bg-slate-800/70 ">
              <FiMinus></FiMinus>
            </div>
            <div className="h-full w-11 flex text-white text-md justify-center items-center hover:bg-slate-800/70 ">
              <FaRegSquare size={13} />
            </div>
            <div
              onClick={() => closeAction()}
              className="h-full w-11 flex text-white text-md justify-center items-center hover:bg-red-600 rounded-tr-md"
            >
              <IoClose size={19} />
            </div>
          </div>
        </div>
        <div className="w-full h-8   bg-zinc-900/95">
          <p className="font-sans font-bold text-white">
            Facebook - Google chronme
          </p>
        </div>
        <div
          className="flex items-center pl-2 w-full h-8"
          style={{ backgroundColor: "#365899" }}
        >
          <FaFacebookSquare color="white" className="mr-2" />
          <p className="font-sans font-bold text-white">Facebook</p>
        </div>
      </div>
    </Draggable>
  );
};
