import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useContext} from "react";
import { AuthContext } from "../context/AuthContext";
import { Button } from "react-bootstrap";





export default function Initpage () {

const context = useContext(AuthContext)


    return (
     
     <>
     
      <Navbar fixed="top" collapseOnSelect expand="lg"  bg="dark" variant="dark" >
          <Container  fluid>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse   id="responsive-navbar-nav">
          {context.login && <>
          <Nav className="me-auto" style={{display:"flex",justifyContent:"center"}}>
          <Container style={{display:"flex",}} fluid>
          <Navbar.Brand href="#home">
            ¡Bienvenido! tu nombre es: {context.userName}
          </Navbar.Brand>
          </Container>
          </Nav>
          <Nav className="ms-auto" style={{marginRight:"50px"}}>
          <Nav.Link as ={Link} to="/productos">Productos</Nav.Link>
          <NavDropdown title="Mas Herramientas" id="collasible-nav-dropdown">
          <NavDropdown.Item as ={Link} to="/alta">Dar de alta un producto</NavDropdown.Item>
          <NavDropdown.Item as ={Button} onClick={context.handlerLogOut} >Salir</NavDropdown.Item>
          </NavDropdown></Nav></>}
          {
          !context.login && <>
          <Nav className="me-auto">
          <Container style={{display:"flex",}} className="me-auto" fluid>
          <Navbar.Brand href="#home">
           Usuario Desconocido
          </Navbar.Brand>
          </Container>
          </Nav>
          <Nav className="ms-auto">
          <Nav.Link as ={Link} to="/singup">Unete a Nosotros</Nav.Link>
          <NavDropdown title="Mas Herramientas" id="collasible-nav-dropdown">
          <NavDropdown.Item as ={Link} to="/login">Log in</NavDropdown.Item> </NavDropdown>
          </Nav>
          </>
         }
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </>
    )}