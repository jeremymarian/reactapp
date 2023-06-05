import {signInWithEmailAndPassword,getAuth} from "firebase/auth";

import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import firebase from "../Services/firebase";
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import {loginMessage} from "../utilidades/errors";
import Alertas from "./Alertas";
import { useState } from "react";



export default function Logform () {
   
const {register, handleSubmit, formState: { errors }} = useForm( {
    defaultValues:{
    email:"",
    password:"",}
});
const context = useContext(AuthContext)
const navigate = useNavigate()
const [avisos,setAvisos] = useState({})
const [show, setShow] = useState(false)

const onSubmit = async data => {
   try{ 
    const responseUser = await signInWithEmailAndPassword(getAuth(),data.email, data.password)
    const userWelcome = responseUser.user.uid
    const userResponse = await firebase.firestore().collection("usuarios")
    .where("userId","==",userWelcome)
    .get()
    const responseOne = userResponse.docs[0].data()
    const user = responseOne?.name
    console.log(responseUser.user.uid)
    if (responseUser.user.uid) {
        context.handlerLogin()
        setShow(true)
        setAvisos({variant:"success",text:`Bienvenido/a ${user}`})
        setTimeout(() => {
            navigate("/productos")
        }, 3000);
        }
} catch (e) {
    setShow(true)
    console.log(e)
    setAvisos({variant:"danger",text:loginMessage[e.code] || "Ha ocurrido un error"})

}

 
}
const logComport = () => {if(show){ 
    const one =  {marginBlockStart:"0px"}
    return one
   }
   else {
    const two = {marginBlockStart:"60px"}
    return two  

}}
    return (
    <>
        <Alertas  {...avisos} show={show} />
        <Form style={logComport()} onSubmit={handleSubmit(onSubmit)}>
           
           <Form.Group>
           <Form.Label>Email</Form.Label> <br />
           <Form.Control {...register("email", {required:true}) }  placeholder="Email" type="email" />
           </Form.Group>
           {errors.email && <p>Campo requerido</p>}
           <Form.Group>
           <Form.Label htmlFor="nombre">Contraseña</Form.Label> <br />
           <Form.Control {...register("password", {required:true})}  placeholder="Password" type="password" />
           </Form.Group>
           {errors.password && <p>Campo requerido</p>}
           </Form>
           <Button onClick={handleSubmit(onSubmit)} style={{marginTop:"20px"}} >Log in</Button>
            </>
    )

}
