import "./App.css";
import Header from "./components/header/Header";
import Cards from "./components/cards/Cards";
import TableData from "./components/table/TableData";

function App() {
  return (
    <>
      <Header />
      <h1 className="ml-10 my-7 text-3xl">Disponible en piso</h1>
      <TableData />

    </>
  );
}

export default App;
