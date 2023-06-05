import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getByIdProductos } from "../Services/productosServices"

function Detalle(){
    const {id} = useParams()
    
    const [producto,setProducto] = useState({})
    const [isLoading,setIsloading] = useState(true)

    useEffect(
        ()=>{
          const result = async ()=>{
            try{
              const productoData = await getByIdProductos(id)
              console.log(productoData.data())
              if(productoData){
                setProducto(productoData.data())
              }
              
              setIsloading(false)
            }catch(e){
              console.log(e)
            }
           
          }
          result()
        },
        [id]
      )

    if(isLoading){
        return(
          <div>
            Cargando...
          </div>
        )
     }else{
        return (
          <div>
            <Link to="/">Inicio</Link>

            <h1>{producto.name}</h1>
            <img src={producto.image}></img>
            <p>{producto.price}</p>
            
          </div>
        )
     } 
    
}

export default Detalle