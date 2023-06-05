import { useForm } from "react-hook-form";
import {Button, Form} from 'react-bootstrap'
import firebase from '../Config/firebase'


function Login(){ 
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        console.log(data)
        try{
           const responseUser = await firebase.auth.signInWithEmailAndPassword(data.email,data.password)
           console.log("responseUser",responseUser.user.uid)
        }catch(e){
            console.log(e)
        }
    }
    
    return(
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar email" {...register("email", { required: true })} />
                    <Form.Text className="text-muted">
                    {errors.email && <span>This field is required</span>}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password", { required: true,minLength:6,maxLength:12 })} />
                    <Form.Text className="text-muted">
                    {errors.password?.type==="required" && <span>This field is required</span>}
                    {errors.password?.type==="minLength" && <span>Debe colocar al menos 6 caracteres</span>}
                    {errors.password?.type==="maxLength" && <span>No puede superar 12 caracteres</span>}
                    </Form.Text>
                </Form.Group>
               
                <Button type="submit" variant="primary">Ingresar</Button>
            </Form>
        </div>
    )
}

export default Login