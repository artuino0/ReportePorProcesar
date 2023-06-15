import { useState } from "react";
import formatearNumeroMexicano from "../../helpers/formater";
import Recepcion from "../../interfeces/receptions";
import tree from "../../assets/tree.svg";
import { EXCLUIDOS } from "../../global";

interface IProps {
  recepciones: Recepcion[];
}

const TableData = (props: IProps) => {
  const { recepciones } = props;
  const [levelOpen, setLevelOpen] = useState<number>(0);

  const handleOpener = () => {
    if (levelOpen == 3) {
      setLevelOpen(0);
      return;
    }
    setLevelOpen(levelOpen + 1);
    console.log(levelOpen);
  };

  return (
    <>
      <div className="w-full m-auto px-3 mb-10 relative ">
        <button
          className="fixed bottom-3 right-3 bg-gray-400 rounded-full h-14 w-14 shadow-md flex items-center justify-center"
          onClick={handleOpener}
        >
          <img src={tree} alt="" className="w-8 h-8" />
        </button>

        <table className=" bg-white w-full shadow-md rounded-xl text-sm p-5 overflow-hidden">
          <thead>
            <tr className="border-b">
              <td className="py-3 pl-6">Cultivo/ Producto/ Palets</td>
              <td className="py-3">Piso</td>
              <td className="py-3">Procesado</td>
              <td className="py-3">Por procesar</td>
              <td className="py-3">Completado</td>
              <td className="py-3">Para empacar</td>
              <td className="py-3">Dias</td>
            </tr>
          </thead>

          <tbody>
            {recepciones.map((recepcion) => (
              <>
                {EXCLUIDOS.includes(recepcion.cultivo.split(" ")[0]) ? null : (
                  <>
                    <tr
                      className={
                        levelOpen >= 1 ? "font-bold" : "even:bg-gray-50"
                      }
                      key={recepcion.cultivo}
                    >
                      <td className="py-[3.5px] text-left pl-6">
                        {recepcion.cultivo}
                      </td>
                      <td className="text-left">
                        {formatearNumeroMexicano(recepcion.noProcesado)}
                      </td>
                      <td className="text-left">
                        {formatearNumeroMexicano(recepcion.corriendo.procesado)}
                      </td>
                      <td className="text-left">
                        {formatearNumeroMexicano(
                          recepcion.corriendo.porProcesar
                        )}
                      </td>
                      <td className="text-left">
                        {formatearNumeroMexicano(recepcion.completado)}
                      </td>
                      <td className="text-left">
                        {formatearNumeroMexicano(recepcion.total_para_empacar)}
                      </td>
                      <td className="text-left">-</td>
                    </tr>

                    {recepcion.agricolas.map((agricola) => (
                      <>
                        <>
                          {levelOpen >= 1 ? (
                            <tr
                              key={agricola.agricola}
                              className={
                                levelOpen >= 2
                                  ? "font-semibold bg-slate-100"
                                  : "even:bg-gray-50"
                              }
                            >
                              <td className="py-1 text-left pl-11">
                                {agricola.agricola}
                              </td>
                              <td className="text-left">
                                {formatearNumeroMexicano(agricola.noProcesado)}
                              </td>
                              <td className="text-left">
                                {formatearNumeroMexicano(
                                  agricola.corriendo.procesado
                                )}
                              </td>
                              <td className="text-left">
                                {formatearNumeroMexicano(
                                  agricola.corriendo.porProcesar
                                )}
                              </td>
                              <td className="text-left">
                                {formatearNumeroMexicano(agricola.completado)}
                              </td>
                              <td className="text-left">
                                {formatearNumeroMexicano(
                                  agricola.total_para_empacar
                                )}
                              </td>
                              <td className="text-left">-</td>
                            </tr>
                          ) : null}
                        </>

                        {agricola.lotes.map((lote) => (
                          <>
                            <>
                              {levelOpen >= 2 ? (
                                <tr
                                  key={lote.lote}
                                  className={
                                    levelOpen >= 3
                                      ? "font-semibold bg-orange-100"
                                      : "even:bg-gray-50"
                                  }
                                >
                                  <td className="py-1 text-left pl-16">
                                    {lote.lote}
                                  </td>
                                  <td className="text-left">
                                    {formatearNumeroMexicano(lote.noProcesado)}
                                  </td>
                                  <td className="text-left">
                                    {formatearNumeroMexicano(
                                      lote.corriendo.procesado
                                    )}
                                  </td>
                                  <td className="text-left">
                                    {formatearNumeroMexicano(
                                      lote.corriendo.porProcesar
                                    )}
                                  </td>
                                  <td className="text-left">
                                    {formatearNumeroMexicano(lote.completado)}
                                  </td>
                                  <td className="text-left">
                                    {formatearNumeroMexicano(
                                      lote.total_para_empacar
                                    )}
                                  </td>
                                  <td className="text-left">-</td>
                                </tr>
                              ) : null}
                            </>

                            {lote.recepciones.map((recep) => (
                              <>
                                {levelOpen >= 3 ? (
                                  <tr className="even:bg-gray-50">
                                    <td className="py-1 text-left pl-24">
                                      {recep.recepcion}
                                    </td>
                                    <td className="text-left">
                                      {formatearNumeroMexicano(
                                        recep.noProcesado
                                      )}
                                    </td>
                                    <td className="text-left">
                                      {formatearNumeroMexicano(
                                        recep.corriendo.procesado
                                      )}
                                    </td>
                                    <td className="text-left">
                                      {formatearNumeroMexicano(
                                        recep.corriendo.porProcesar
                                      )}
                                    </td>
                                    <td className="text-left">
                                      {formatearNumeroMexicano(
                                        recep.completado
                                      )}
                                    </td>
                                    <td className="text-left">
                                      {formatearNumeroMexicano(
                                        recep.total_para_empacar
                                      )}
                                    </td>
                                    <td className="text-left">
                                      {recep.dias_piso}
                                    </td>
                                  </tr>
                                ) : null}
                              </>
                            ))}
                          </>
                        ))}
                      </>
                    ))}
                  </>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableData;
