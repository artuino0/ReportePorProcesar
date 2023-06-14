import { useState } from "react";
import formatearNumeroMexicano from "../../helpers/formater";

interface IProps {
  completado: number;
}

const CompletadoCard = (props: IProps) => {
  const { completado } = props;

  return (
    <>
      <div className="bg-white mr-9 h-[120px] w-[23%] rounded-lg flex flex-col justify-center items-stretch p-5 shadow-md">
        <span className="text-[15px]">Completado</span>
        <h1 className="ml-2 text-black text-3xl font-bold">
          {formatearNumeroMexicano(completado)}
        </h1>
      </div>
    </>
  );
};

export default CompletadoCard;
