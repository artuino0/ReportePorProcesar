import axios from "axios";
import {useState, useEffect} from "react";
import Recepcion from "../../interfeces/receptions";

interface IAgricola {
  
}

const TableData = () => {
    const [disPiso, setDisPiso] = useState<Recepcion[]>([])
    const [agricolas, setAgricolas] = useState<any[]>([])

     useEffect(() => {
    axios
      .get<Recepcion[]>("http://10.3.1.3:3005/api/v1/recepciones")
      .then(({ data }) => {
        setDisPiso(data);
      });
  }, []);

  
  return (
    <>
    <div className="w-full m-auto px-6 mb-10 ">
    <table className=" bg-white w-full shadow-md rounded-xl">
      <thead>
        <tr>
        <td className="text-center">Cultivo/ Producto/ Palets</td>
        <td className="text-center">Piso</td>
        <td className="text-center">Procesado</td>
        <td className="text-center">Por procesar</td>
        <td className="text-center">Completado</td>
        <td className="text-center">Para empacar</td>
        <td className="text-center">Dias</td>
      </tr>
      </thead>

      <tbody>
        {disPiso.map((piso)=>(
          <tr key={piso.cultivo}>
            <th>{piso.cultivo}</th>
            {piso.agricolas.map((agricola)=>(
              <>
              <tr>{agricola.agricola}</tr>
              </>
            ))}
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
         
          </tr>
        ))}
       
      </tbody>

      <tfoot>
      </tfoot>
    </table>
    </div>
    </>
  );  
};

export default TableData;
