const Cultivo =()=>{
    return(
        <>
        <h2 className="mr-3 text-sm">Cultivo:</h2>
        <select className="mr-4 w-48 h-8 pl-2 text-sm text-gray-500 rounded bg-gray-100 " name="Seleccione cultivo" id="">
            <option value="">Seleccione cultivo</option>
            <option value="">03 - Persian Cucumber</option>
            <option value="">04 - Pimiento Rojo</option>
            <option value="">07 - Pimiento Verde</option>
            <option value="">11 - Pimiento Orgánico Verde</option>
            <option value="">12 - Organic P Cucumber</option>
            <option value="">23 - Organic Slicer Cucumber</option>
            <option value="">30 - Org Roma Tomatoes</option>
            <option value="">31 - TOV Organico</option>
            <option value="">35 - Conventional Roma Tomatoes</option>
            <option value="">43 - Tomate UVA </option>
            <option value="">45 - Slicer Cucumber </option>
            <option value="">63 - Organic P Cucumber </option>
        </select>
        </>
    )
}

const Lote = ()=>{
    return(
    <>
    <h2 className="mr-3 text-sm" >Lote:</h2>
    <input className="mr-4 w-48 h-8 pl-2 text-sm text-gray-500 rounded bg-gray-100" type="number" placeholder="Seleccione lote"/>
    </>
    )
}

const Etiqueta = ()=>{
    return(
    <>
    <h2 className="mr-3 text-sm" >Etiqueta:</h2>
    <input className="mr-4 w-48 h-8 pl-2 text-sm text-gray-500 rounded bg-gray-100" type="text" placeholder="Seleccione etiqueta"/>
    </>
    )
}

const RigthCard=()=>{
    return(
        <>
        <div className="flex mr-4 my-2 items-center">
        <Cultivo/>
        <Lote/>
        <Etiqueta/>
        </div>
        </>
    )
}

export default RigthCard