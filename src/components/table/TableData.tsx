import { useState } from "react";
import formatearNumeroMexicano from "../../helpers/formater";
import Recepcion from "../../interfeces/receptions";
import tree from "../../assets/tree.svg";

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
      <div className="w-full m-auto px-6 mb-10 relative">
        <button
          className="fixed bottom-3 right-3 bg-gray-400 rounded-full h-14 w-14 shadow-md flex items-center justify-center"
          onClick={handleOpener}
        >
          <img src={tree} alt="" className="w-8 h-8" />
        </button>

        <table className=" bg-white w-full shadow-md rounded-xl">
          <thead>
            <tr>
              <td className="py-4 pl-6">Cultivo/ Producto/ Palets</td>
              <td className="py-4">Piso</td>
              <td className="py-4">Procesado</td>
              <td className="py-4">Por procesar</td>
              <td className="py-4">Completado</td>
              <td className="py-4">Para empacar</td>
              <td className="py-4">Dias</td>
            </tr>
          </thead>

          <tbody>
            {recepciones.map((recepcion) => (
              <>
                <tr key={recepcion.cultivo}>
                  <th className="text-left pl-6">{recepcion.cultivo}</th>
                  <th className="text-left">
                    {formatearNumeroMexicano(recepcion.noProcesado)}
                  </th>
                  <th className="text-left">
                    {formatearNumeroMexicano(recepcion.corriendo.procesado)}
                  </th>
                  <th className="text-left">
                    {formatearNumeroMexicano(recepcion.corriendo.porProcesar)}
                  </th>
                  <th className="text-left">
                    {formatearNumeroMexicano(recepcion.completado)}
                  </th>
                  <th className="text-left">
                    {formatearNumeroMexicano(recepcion.total_para_empacar)}
                  </th>
                  <th className="text-left">-</th>
                </tr>

                {recepcion.agricolas.map((agricola) => (
                  <>
                    <tr key={agricola.agricola} className=" bg-slate-100 ">
                      <td className="text-left pl-11">{agricola.agricola}</td>
                      <td className="text-left">
                        {formatearNumeroMexicano(agricola.noProcesado)}
                      </td>
                      <td className="text-left">
                        {formatearNumeroMexicano(agricola.corriendo.procesado)}
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
                        {formatearNumeroMexicano(agricola.total_para_empacar)}
                      </td>
                      <td className="text-left">-</td>
                    </tr>

                    {agricola.lotes.map((lote) => (
                      <>
                        <tr key={lote.lote} className=" bg-orange-50">
                          <td className="text-left pl-16">{lote.lote}</td>
                          <td className="text-left">
                            {formatearNumeroMexicano(lote.noProcesado)}
                          </td>
                          <td className="text-left">
                            {formatearNumeroMexicano(lote.corriendo.procesado)}
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
                            {formatearNumeroMexicano(lote.total_para_empacar)}
                          </td>
                          <td className="text-left">-</td>
                        </tr>

                        {lote.recepciones.map((recep) => (
                          <>
                            <tr>
                              <td className="text-left pl-24">
                                {recep.recepcion}
                              </td>
                              <td className="text-left">
                                {formatearNumeroMexicano(recep.noProcesado)}
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
                                {formatearNumeroMexicano(recep.completado)}
                              </td>
                              <td className="text-left">
                                {formatearNumeroMexicano(
                                  recep.total_para_empacar
                                )}
                              </td>
                              <td className="text-left">{recep.dias_piso}</td>
                            </tr>
                          </>
                        ))}
                      </>
                    ))}
                  </>
                ))}
              </>
            ))}
          </tbody>

          <tfoot></tfoot>
        </table>
      </div>
    </>
  );
};

export default TableData;
