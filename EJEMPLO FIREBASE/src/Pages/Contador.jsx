import React,{useState} from 'react';


function Contador(){ 
    const [cantidad,setCantidad] = useState(0)
    const handleIncrementar = ()=>{
        //NO SE PUEDE HACER
        // cantidad++
        // cantidad = cantidad + 1
        // setCantidad(cantidad++)
        // setCantidad(cantidad+=1)

        //COMO SE DEBE HACER
        setCantidad(cantidad + 1)
    }
    const handleDecrementar = ()=>{
        setCantidad(cantidad - 1)
    }
    return(
        <>
            Contador
            <button onClick={handleIncrementar}>Incrementar</button>
            <button onClick={handleDecrementar}>Decrementar</button>
            <div>
                {cantidad}
            </div>
        </>
    )
}

export default Contador