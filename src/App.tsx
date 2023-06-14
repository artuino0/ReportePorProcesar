import "./App.css";
import Header from "./components/header/Header";
import Cards from "./components/cards/Cards";
import TableData from "./components/table/TableData";
import { useEffect, useState } from "react";
import axios from "axios";
import Recepcion from "./interfeces/receptions";

const App = () => {
  const [recepciones, setRecepciones] = useState<Recepcion[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Recepcion[]>(
          "http://10.3.1.3:3005/api/v1/recepciones"
        );
        setRecepciones(response.data);
      } catch (error) {
        console.error("Error al obtener las recepciones:", error);
      }
    };

    fetchData(); 

    const interval = setInterval(fetchData, 600000); 

    return () => {
      clearInterval(interval); 
    };
  }, []);


  return (
    <>
      <Header />
      <Cards recepciones={recepciones}/>
      <TableData recepciones={recepciones} />
    </>
  );
};

export default App;
