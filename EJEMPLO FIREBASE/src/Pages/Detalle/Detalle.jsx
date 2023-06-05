import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getByIdProductos } from "../../Services/productosServices"
import Spinner from 'react-bootstrap/Spinner';
import styles from './Detalle.module.css'

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
          <div className={styles.spinner_detalle}>
            <Spinner  animation="grow" />
          </div>
        )
     }else{
        return (
          <div>
            <Link to="/">Inicio</Link>

            <h1>{producto.name}</h1>
            <img src={producto.image}  alt={`Imagen principal para el producto ${producto.name}`}></img>
            <p>{producto.price}</p>
            
          </div>
        )
     } 
    
}

export default Detalle