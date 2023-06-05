    import firebase from '../Services/firebase'
    import { Form, Button } from "react-bootstrap"
    import {useForm} from "react-hook-form"
    import  {useEffect} from "react"
    import { Link } from 'react-router-dom'

    export default function Altaprod () {
       

    const {register, handleSubmit,reset,formState, formState: { errors }} = useForm ({defaultValues: {
        name:"",
        description:"",
        price:"",
    }})

    const onSubmit = async data => { 
        try { const document = await firebase.firestore().collection('productos').add(data)
            console.log(document)
        } catch (error) {
            console.log(error)
            
        } }

        useEffect (
            () => { if (formState.isSubmitSuccessful) {
                reset({
                    name:"",
                    description:"",
                    price:"",
                })
            }}
        , [formState,reset])
        return(
            <>
    <Form style={{marginBlockStart:"60px"}} onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
            <Form.Label>Producto</Form.Label>
            <Form.Control type="text"  placeholder="Nombre del producto" {...register("name", {required:true})}/>
            <Form.Text className="text-muted">
                {errors.name && <p>Campo requerido</p>}
            </Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Descripcion</Form.Label>
            <Form.Control type="text" placeholder="Descripcion" {...register("description", {required:true})}/>
            <Form.Text className="text-muted">{errors.description && <p>Campo requerido</p>}
            </Form.Text>
        </Form.Group>
        <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control type="text"  placeholder="precio del producto" {...register("price", {required:true})}/>
            <Form.Text className='text-muted'>{errors.price&&<p>Campo requerido</p>}
        </Form.Text>
        </Form.Group>
    <Button style={{marginBlockStart:"10px"}} type="submit" variant="primary">Guardar</Button>
    <Button style={{marginBlockStart:"10px", marginLeft:"5px"}} as={Link} to={"/productos"} variant="primary">Atras</Button>
            </Form>
            </>
        )
    }