import CompletadoCard from "./CompletadoCard";
import ParaEmpacar from "./ParaEmpacar";
import PisoCard from "./PisoCard"; 
import ProcesosCard from "./ProcesosCard";

const Cards = () => {
  return (
  <>
  <div className="flex w-full m-auto px-6 mb-10">
    <PisoCard/>
    <ProcesosCard/>
    <CompletadoCard/>
    <ParaEmpacar/>
  </div>
  </>
    )
  
};

export default Cards;
