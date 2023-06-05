import React from "react"
import { Link } from "react-router-dom"
import {Button, Card, Col} from 'react-bootstrap';

const styles = {
  card:{
    // minWidth: '18rem',
    marginBottom: '10px'
  },
  buttons:{
    marginRight: "10px"
  }
}

function Producto({ 
  id,
  name,
  description,
  price,
  category_id,
  image
}){
  return (
    <>
      <Col xs={12} sm={6} lg={4} xxl={3}>
        <Card style={styles.card}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
              {description}
              </Card.Text>
              <Card.Text>
              $ {price}
              </Card.Text>
              <Button style={styles.buttons} as={Link} to={`/producto/${id}`} variant="primary">Ver Detalle</Button>
              <Button as={Link} to={`/producto/editar/${id}`} variant="primary">Editar</Button>
            </Card.Body>
          </Card>
      </Col>
    </>
      
  )
}

export default Producto
