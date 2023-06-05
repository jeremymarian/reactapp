import { createUserWithEmailAndPassword,getAuth } from "firebase/auth";
import {useForm} from "react-hook-form";
import firebase from "../Services/firebase";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useEffect} from "react";
import {registroMessage} from "../utilidades/errors";
import Alertas from "./Alertas";
import { useState } from "react";
import {useNavigate} from "react-router-dom";


const Singform = () => {

    const {register,handleSubmit,formState,formState:{errors},reset} = useForm ({defaultValues: {
        nombre:"",
        apellido:"",
        email:"",
        fnac:"",
        user:"",
        password:"",
    }}
    )
const [avisos,setAvisos] = useState({})
const [show, setShow] = useState(false)
const navigate = useNavigate()
const auth = getAuth()
const onSubmit = async data => { 
console.log(data) 
try {
    const responseUser = await createUserWithEmailAndPassword(auth,data.email,data.password)
    console.log(responseUser.user.uid)
    if (responseUser.user.uid) {
    const document = await firebase.firestore().collection("usuarios")
        .add({
            name:data.nombre,
            lastname:data.apellido,
            email:data.email,
            born:data.fnac,
            user:data.user,
            password:data.password,
            userId:responseUser.user.uid,
        })
console.log(document)
setShow(true)
setAvisos({variant:"success",text:"Registro exitoso"})
setTimeout(() => {
    navigate("/login")
}, 3000);
    }
} catch (e) {
    setShow(true)
    console.log(e)
    setAvisos({variant:"danger",text:`${registroMessage[e.code]}` || "ha ocurrido un error"})
    
};
}

useEffect (
    () => { if (formState.isSubmitSuccessful) {
        reset({
            nombre:"",
            apellido:"",
            email:"",
            fnac:"",
            user:"",
            password:"",
        })
    }}
, [formState,reset])

const singComport = () => {if(show){ 
    const one =  {marginBlockStart:"0px"}
    return one
   }
   else {
    const two = {marginBlockStart:"60px"}
    return two
   
   

}}

    return(
                <>
                <Alertas  {...avisos} show={show} />
                <Form style={singComport()}onSubmit={handleSubmit(onSubmit)}>
           
                        <Form.Group>
                        <Form.Label>Nombre</Form.Label> <br />
                        <Form.Control {...register("nombre")}  placeholder="Nombre" type="text" />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label htmlFor="nombre">Apellido</Form.Label> <br />
                        <Form.Control {...register("apellido")}  placeholder="Apellido" type="text" />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label htmlFor="nombre">Email</Form.Label> <br />
                        <Form.Control {...register("email")}  placeholder="Email" type="text" />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label htmlFor="nombre">Fecha de Nacimiento</Form.Label> <br />
                        <Form.Control {...register("fnac")}  placeholder="Fecha de Nacimiento" type="date" />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label htmlFor="nombre">Usuario</Form.Label> <br />
                        <Form.Control {...register("user")}  placeholder="Usuario" type="text" />
                        </Form.Group>
                        <Form.Group>
                        <Form.Label htmlFor="nombre">Contraseña</Form.Label> <br />
                        <Form.Control {...register("password", {required:true})}  placeholder="Contraseña" type="password" />
                        </Form.Group>
                    <br/><div>{errors.password&&<span>"campo requerido"</span>}</div>
                 
           
                
            <Button variant="primary" type="submit">jOIn us</Button>
        
            
            </Form>
            </>)
    }
    
    export {Singform}