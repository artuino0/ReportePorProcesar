import { useEffect, useState } from "react";
import formatearNumeroMexicano from "../../helpers/formater";
import Recepcion from "../../interfeces/receptions";
import { EXCLUIDOS } from "../../global";

interface IProps {
  recepciones: Recepcion[];
}

const TableData = (props: IProps) => {
  const { recepciones } = props;
  const [mutatedRecepciones, setMutatedRecepciones] = useState<Recepcion[]>([]);

  useEffect(() => {
    setMutatedRecepciones(recepciones);
  });

  const handleOpenClick = (data: string) => {
    const tranformerData = mutatedRecepciones?.map((recepcion) => {
      if (recepcion.cultivo === data) {
        recepcion.detailed = !recepcion.detailed;
      }

      recepcion.agricolas.map((agricola) => {
        if (agricola.agricola === data) {
          agricola.detailed = !agricola.detailed;
        }

        agricola.lotes.map((lote) => {
          if (lote.lote === data) {
            lote.detailed = !lote.detailed;
          }
        });
      });

      return recepcion;
    });

    setMutatedRecepciones(tranformerData);
  };

  return (
    <>
      <div className="w-full m-auto px-3 mb-10 relative ">
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
            {mutatedRecepciones.map((recepcion) => (
              <>
                {EXCLUIDOS.includes(recepcion.cultivo.split(" ")[0]) ? null : (
                  <>
                    <tr
                      className={
                        recepcion.detailed ? "font-bold" : "even:bg-gray-50"
                      }
                      key={recepcion.cultivo}
                    >
                      <td className="py-[3.5px] text-left pl-6">
                        <button
                          className="h-5 w-5 items-center justify-center mx-1"
                          onClick={() => handleOpenClick(recepcion.cultivo)}
                        >
                          <i
                            className={
                              recepcion.detailed
                                ? "bi bi-dash-square w-2 h-2"
                                : "bi bi-plus-square w-2 h-2"
                            }
                          ></i>
                        </button>
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

                    {recepcion.detailed &&
                      recepcion.agricolas.map((agricola) => (
                        <>
                          <>
                            {mutatedRecepciones ? (
                              <tr
                                key={agricola.agricola}
                                className={
                                  agricola.detailed
                                    ? "font-semibold bg-slate-100"
                                    : "even:bg-gray-50"
                                }
                              >
                                <td className="py-1 text-left pl-11">
                                  <button
                                    className="h-5 w-5 items-center justify-center mx-1"
                                    onClick={() =>
                                      handleOpenClick(agricola.agricola)
                                    }
                                  >
                                    <i
                                      className={
                                        agricola.detailed
                                          ? "bi bi-dash-square w-2 h-2"
                                          : "bi bi-plus-square w-2 h-2"
                                      }
                                    ></i>
                                  </button>
                                  {agricola.agricola}
                                </td>
                                <td className="text-left">
                                  {formatearNumeroMexicano(
                                    agricola.noProcesado
                                  )}
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

                          {agricola.detailed &&
                            agricola.lotes.map((lote) => (
                              <>
                                <>
                                  {mutatedRecepciones ? (
                                    <tr
                                      key={lote.lote}
                                      className={
                                        lote.detailed
                                          ? "font-semibold bg-orange-100"
                                          : "even:bg-gray-50"
                                      }
                                    >
                                      <td className="py-1 text-left pl-16">
                                        <button
                                          className="h-5 w-5 items-center justify-center mx-1"
                                          onClick={() =>
                                            handleOpenClick(lote.lote)
                                          }
                                        >
                                          <i
                                            className={
                                              lote.detailed
                                                ? "bi bi-dash-square w-2 h-2"
                                                : "bi bi-plus-square w-2 h-2"
                                            }
                                          ></i>
                                        </button>
                                        {lote.lote}
                                      </td>
                                      <td className="text-left">
                                        {formatearNumeroMexicano(
                                          lote.noProcesado
                                        )}
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
                                        {formatearNumeroMexicano(
                                          lote.completado
                                        )}
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

                                {lote.detailed &&
                                  lote.recepciones.map((recep) => (
                                    <>
                                      {mutatedRecepciones ? (
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
