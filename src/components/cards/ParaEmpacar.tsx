import { useState } from "react";
import formatearNumeroMexicano from "../../helpers/formater";

interface IProps {
  empacar: number;
}

const ParaEmpacar = (props: IProps) => {
  const { empacar } = props;

  return (
    <>
      <div className="bg-white h-[120px]  w-[23%] rounded-lg flex flex-col justify-center items-stretch p-5 shadow-md">
        <span className="text-[15px]">Para Empacar</span>
        <h1 className="ml-2 text-black text-3xl font-bold">
          {formatearNumeroMexicano(empacar)}
        </h1>
      </div>
    </>
  );
};

export default ParaEmpacar;
