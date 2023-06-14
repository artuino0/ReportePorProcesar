const Procesado =()=>{
    return(
        <>
        <div className="flex flex-col justify-center ">
        <span className="text-[15px]" >Procesado</span>
        <h1 className="ml-2 text-black text-3xl font-bold">79,640.18</h1>
        </div>
        </>
    )
}

const PorProcesar=()=>{
    return(
        <>
        <div className="flex flex-col justify-center ">
        <span className="text-[15px]">Por Procesar</span>
        <h1 className="ml-2 text-black text-3xl font-bold">781.42</h1>
        </div>
        </>
    )
}



const ProcesosCard =()=>{
    return (
        <>
        <div className="bg-white h-[120px] w-[34%] mr-9 rounded-lg flex items-center justify-around shadow-md">
        <Procesado/>
        <PorProcesar/>
        </div>
        </>
    )
}

export default ProcesosCard