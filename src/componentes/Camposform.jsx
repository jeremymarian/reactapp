import Card from 'react-bootstrap/Card';
 import { Link } from "react-router-dom"
 import {useContext} from "react";
import { AuthContext } from "../context/AuthContext";
 function Campos ({
   id,
   price,
   description,
   name,
   
 
 }) {
 const context = useContext(AuthContext)
 
  
 
    return (<>
    <Card

    text={"light".toLowerCase()}
    className="mb-2"
    bg={"dark"} style={{marginTop:"60px"}}>
<Card.Body>
  <Card.Title>Nombre: {name}</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">Descripcion</Card.Subtitle>
  <Card.Text>
 {description}
  </Card.Text>
  <Card.Subtitle className="mb-2 text-muted">Precio</Card.Subtitle>
  <Card.Text>
 ${price}
  </Card.Text>
  {context.login && <>
  <Card.Link as = {Link} to={`/plop/${id}`}>Detalle</Card.Link>
  <Card.Link as = {Link} to={`/modif/${id}`}>Modificar</Card.Link>
  </> }

</Card.Body>
</Card>
    </>)
    
   

}

export default Campos


