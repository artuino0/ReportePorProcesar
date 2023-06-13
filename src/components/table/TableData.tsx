import axios from "axios";
import {useState, useEffect} from "react";

const BaseURL = "http://10.3.1.3:3005/api/v1/recepciones"

const TableData = () => {

    const [post, setPost] = useState(null)
    
   



  return (
    <>
    <table className="mx-7 bg-yellow-50">
      <thead>
        <tr>
        <th>Cultivo/ Producto/ Palets</th>
        <th>Estiba</th>
        <th>Lote</th>
        <th>Fecha</th>
        <th>Cajas</th>
        <th>Dias</th>
        <th>Etiqueta</th>
        <th>Asignar</th>
      </tr>
      </thead>

      <tbody>
       
      </tbody>

      <tfoot>
        
      </tfoot>
    </table>
    </>
  );  
};

export default TableData;
