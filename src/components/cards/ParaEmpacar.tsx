import formatearNumeroMexicano from "../../helpers/formater";

interface IProps {
  empacar: number;
}

const ParaEmpacar = (props: IProps) => {
  const { empacar } = props;

  return (
    <>
      <div className="bg-white w-[23%] rounded-lg flex flex-col justify-center items-stretch py-4 px-5 shadow-md">
        <span className="text-[15px]">Para Empacar</span>
        <h1 className="ml-2 text-black text-3xl font-bold">{formatearNumeroMexicano(empacar)}</h1>
      </div>
    </>
  );
};

export default ParaEmpacar;
