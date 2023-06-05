import { useParams } from "react-router-dom"
import { getOnlyDataByFB } from "../Services/componentservices"
import { useState,useEffect } from "react"
import Buttonf from "./button"
import { averSiFunc } from "./button"
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import {useContext} from "react";
import { AuthContext } from "../context/AuthContext";


export default  function Buystage() {

  const {dat} = useParams()

  const [producto,setProducto] = useState()
  const [isloading, setIsLoading] = useState(true)
  const context = useContext(AuthContext)

    useEffect( () => { 
      const infValues = async () => {
      try {
        const response = await getOnlyDataByFB(dat)
          setProducto(response.data())  
          console.log(response.data())
          setIsLoading(false)
          }
     catch (e) {
        console.log("error inesperado")
      }}
    infValues()
    } ,[dat])
    if (isloading) {
      return <div>Now Loading</div>
    }
    else {
     
    return (
<>
<Card
      text={"light".toLowerCase()}
    className="mb-2"
    bg={"dark"} style={{ width: '18rem',marginBlockStart:"60px", position:"fixed" }}>
<Card.Body>
  <Card.Title>Confirme su compra</Card.Title>
  <Card.Text>Nombre:{producto.name}</Card.Text>
  <Card.Subtitle className="mb-2 text-muted">Descripcion</Card.Subtitle>
  <Card.Text>
  {producto.description}
  </Card.Text>
  <Card.Subtitle className="mb-2 text-muted">Precio</Card.Subtitle>
  <Card.Text>
  ${producto.price}
  </Card.Text>
  {context.login && <>
  <Buttonf
  pePe={averSiFunc}/>
  <h3 className="holav"> </h3></>}
  <Card.Link as = {Link} to={`/productos`}>Atras</Card.Link>
</Card.Body>
</Card>
   
    </> )

    
}
}