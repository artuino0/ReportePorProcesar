import { useEffect, useState } from "react";
import CompletadoCard from "./CompletadoCard";
import ParaEmpacar from "./ParaEmpacar";
import PisoCard from "./PisoCard";

import Recepcion from "../../interfeces/receptions";
import ProcesosCard from "./ProcesosCard";

interface IProps {
  recepciones: Recepcion[];
}

const Cards = (props: IProps) => {
  const { recepciones } = props;
  const [disponible, setDisponible] = useState<number>(0); //Ya esta
  const [paraEmpacar, setParaEmpacar] = useState<number>(0);
  const [procesos, setProcesos] = useState<{
    porProcesar: number;
    procesado: number;
  }>({ porProcesar: 0, procesado: 0 });
  const [completado, setCompletado] = useState<number>(0);

  useEffect(() => {
    let disponibleIteracion = 0;
    let porEmpacarIteracion = 0;
    let complteadoIteracion = 0;
    let porProcesarIteracion = 0;
    let procesadoIteracion = 0;

    recepciones.map((recepcion) => {
      disponibleIteracion = disponibleIteracion + recepcion.noProcesado;
      setDisponible(disponibleIteracion);

      porEmpacarIteracion = porEmpacarIteracion + recepcion.total_para_empacar;
      setParaEmpacar(porEmpacarIteracion);

      complteadoIteracion = complteadoIteracion + recepcion.completado;
      setCompletado(complteadoIteracion);

      porProcesarIteracion =
        porProcesarIteracion + recepcion.corriendo.porProcesar;
      procesadoIteracion = procesadoIteracion + recepcion.corriendo.procesado;
      setProcesos({
        porProcesar: porProcesarIteracion,
        procesado: procesadoIteracion,
      });
    });
  }, [recepciones]);

  return (
    <div className="flex w-full m-auto px-6 mb-5">
      <PisoCard disponible={disponible} />

      <ProcesosCard procesando={procesos} />

      <CompletadoCard completado={completado} />
      <ParaEmpacar empacar={paraEmpacar} />
    </div>
  );
};

export default Cards;
