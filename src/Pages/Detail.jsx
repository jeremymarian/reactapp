import { useParams } from "react-router-dom"
import { getOnlyDataByFB } from "../Services/componentservices"
import { useState,useEffect } from "react"
import ProgressBar from 'react-bootstrap/ProgressBar';
import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import {useContext} from "react";
import { AuthContext } from "../context/AuthContext";


export default  function Detail() {

  const {val} = useParams()

  const [product,setProduct] = useState([])
  const [id,setId] = useState([])
  const [isloading, setIsLoading] = useState(true)
  const context = useContext(AuthContext)

    useEffect( () => { 
      const infValues = async () => {
      try {
        const response = await getOnlyDataByFB(val)
          setProduct(response.data())  
          console.log(response.data())
         setId(response.id)
         setTimeout(() => {
          setIsLoading(false)
         }, 2000);
          
          }
     catch (e) {
        console.log("error inesperado")
      }}
    infValues()
    } ,[val])
    if (isloading) {
      return (<div className="progressBar"><ProgressBar style={{marginTop:"60px"}} variant="success" animated={true} now={100} />
              <div>Now Loading</div></div>)
    }
    else {
     
    return (
<>
<Card 
      text={"light".toLowerCase()}
    className="mb-2"
    bg={"dark"} style={{ width: '18rem',marginBlockStart:"60px" }}>
<Card.Body>
  <Card.Title>Nombre: {product.name}</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">Descripcion</Card.Subtitle>
  <Card.Text>
  {product.description}
  </Card.Text>
  <Card.Subtitle className="mb-2 text-muted">Precio</Card.Subtitle>
  <Card.Text>
  ${product.price}
  </Card.Text>
  <Card.Link as = {Link} to={`/productos`}>Atras</Card.Link>
  {context.login && <>
  <Card.Link as = {Link} to={`/buystage/${id}`}>Comprar</Card.Link>
  </>}
</Card.Body>
</Card>
   
    </> )

    
}
}
