import React from "react";
import { FaFacebookSquare } from "react-icons/fa";

export const ModalLoginFacebook = () => {
  return (
    <div className="absolute top-36 left-96 right-3 w-1/3 h-1/2 bg-white rounded-md border border-blue-600/80">
      <div className="w-full h-7 bg-black rounded-t-md flex flex-row">
        <p className="flex justify-center items-center ml-2 font-sans text-sm text-white">
          Facebook - Google chrome
        </p>
      </div>
      <div className="w-full h-8   bg-zinc-900/95">
        <p className="font-sans font-bold text-white">
          Facebook - Google chronme
        </p>
      </div>
      <div className="w-full h-6" style={{ backgroundColor: "#365899" }}>
        <FaFacebookSquare className="mr-2" />
        <p className="font-sans font-bold text-white">Facebook</p>
      </div>
    </div>
  );
};
