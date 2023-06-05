import React, {useState,useEffect} from "react"
import { getAllProductos } from "../../Services/productosServices"
import Producto from "../Producto"
import Row from "react-bootstrap/Row"
import Spinner from 'react-bootstrap/Spinner';
import './productos.css'

function Productos(){ 
  const titulo = "Listado de productos"
  const [productos,setProductos] = useState([])
  const [isLoading,setIsloading] = useState(true)
  const [buscar,setBuscar] = useState('ipod')
  
  useEffect(
    ()=>{
      const result = async ()=>{
        try{
          const productos = await getAllProductos(buscar)
          console.log(productos)
          setProductos(productos)
          setIsloading(false)
        }catch(e){
          console.log(e)
        }
       
      }
      result()
    },
    [buscar]
  )
  if(isLoading){
      return(
        <div className="spinner">
          <Spinner  animation="grow" />
        </div>
      )
  }else{
      return (
        <div>
          <h1>{titulo}</h1>
          <input type="text" value={buscar} onChange={(event)=>setBuscar(event.target.value)} ></input>
          <Row>
          {productos.map(producto => <Producto key={producto.id} {...producto.data()} id={producto.id} />)}
          </Row>
        </div>
      )
  }   

}

export default Productos
