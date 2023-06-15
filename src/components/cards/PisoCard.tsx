import formatearNumeroMexicano from "../../helpers/formater";

interface IProps {
  disponible: number;
}

const PisoCard = (props: IProps) => {
  const { disponible } = props;

  return (
    <>
      <div className="bg-white  w-[23%] rounded-lg flex flex-col justify-center items-stretch py-2 px-5 shadow-md">
        <span className="text-[15px]">Piso</span>
        <h1 className="ml-2 text-black text-3xl font-bold">{formatearNumeroMexicano(disponible)}</h1>
      </div>
    </>
  );
};

export default PisoCard;
