const ProductoPiso = ()=>{
    return(<>
    <button className="m-2 text-gray-400 hover:text-black"><i>icon 1</i> Producto en piso</button>
    </>)
}

const ProductoExterno= ()=>{
    return(<>
    <button className="m-2 text-gray-400 hover:text-black"><i>icon 2</i> Producto externo</button>
    </>)
}

const Pedidos = ()=>{
    return(<>
    <button className="m-2 text-gray-400 hover:text-black"><i>icon 3</i> Pedidos</button>
    </>)
}

const EnTransito = ()=>{
    return(<>
    <button className="m-2 text-gray-400 hover:text-black"><i>icon 4</i> En transito</button>
    </>)
}


const HeaderContent = ()=>{
    return( 
    <>
    <div className="bg-slate-100 w-7/12 h-[72px] flex rounded-xl items-center justify-center">
    <ProductoPiso/>
    <ProductoExterno/>
    <Pedidos/>
    <EnTransito/>
    </div>
    </>)
}

export default HeaderContent

/*
import React, { useState } from 'react';

const Button = ({ text }) => {
  const [btnActive, setBtnActive] = useState(false);

  const handleButtonClick = () => {
    setBtnActive(!btnActive);
  };

  return (
    <button
      className={`m-2 text-gray-400 hover:text-black  ${btnActive ? 'p-[12px] bg-accent-blue bg-gradient-to-r from-blue-500 to-blue-300 rounded-[10px] text-white ml-[10px] mr-[10px] cursor-pointer bg-accent-blue-50 hover:text-white' : ''}`}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

const HeaderContent = () => {
  return (
    <>
      <div className="bg-slate-100 w-7/12 h-20 flex rounded-xl items-center justify-center">
        <Button text="Producto en piso" />
        <Button text="Producto externo" />
        <Button text="Pedidos" />
        <Button text="En tránsito" />
      </div>
    </>
  );
};

export default HeaderContent;
*/