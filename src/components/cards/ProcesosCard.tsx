import { useState } from "react";
import formatearNumeroMexicano from "../../helpers/formater";

interface IProps {
  procesando: {
    porProcesar: number;
    procesado: number;
  };
}

const ProcesosCard = (props: IProps) => {
  const { procesando } = props;

  return (
    <div className="bg-white h-[120px] w-[34%] mr-9 rounded-lg flex items-center justify-around shadow-md">
      <div className="flex flex-col">
        <span className="text-[15px]">Procesado</span>
        <h1 className="ml-2 text-black text-3xl font-bold">
          {formatearNumeroMexicano(procesando.procesado)}
        </h1>
      </div>

      <div className="flex flex-col  ">
        <span className="text-[15px]">Por Procesar</span>
        <h1 className="ml-2 text-black text-3xl font-bold">
          {formatearNumeroMexicano(procesando.porProcesar)}
        </h1>
      </div>
    </div>
  );
};

export default ProcesosCard;
