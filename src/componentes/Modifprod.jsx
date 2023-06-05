
import { Form, Button } from "react-bootstrap"
import {useForm} from "react-hook-form"
import { deleteData,getOnlyDataByFB,actualizarData } from '../Services/componentservices'
import {useParams} from "react-router-dom"
import { useEffect } from "react"

export default function Modifprod () {
    
const {id} = useParams()

const {register, handleSubmit,reset,formState,formState: { errors }, setValue} = useForm ({defaultValues: {
    name:"",
    description:"",
    price:"",
}})



useEffect (() => { 
  
    if(formState.isSubmitSuccessful){
    reset ({
        name:"",
        description:"",
        price:"",
    })

} 

 } , [formState,reset,])

 const handleDelete = async () => {
    try {
        const document = await deleteData(id)
        const setOkeyDelete = true
        console.log(document)

       if(setOkeyDelete){
            reset ({
                name:"",
                description:"",
                price:"",
            })}

        
       
    } catch (error) {
        
    }
}

const responser = async () => {
try {
    const retry = await getOnlyDataByFB(id)
    console.log(retry)
    if (retry) {
        setValue("name", retry.data().name)
        setValue("description", retry.data().description)
        setValue("price", retry.data().price)
    }
} catch (error) {
    console.log(error)
    
}
}

responser()

const onSubmit =  async data => { 
    try { const document = await actualizarData(id,data)
        console.log(document)
    } catch (error) {
        console.log(error)
        
    } }

   
   
    
    return(
        <>
<Button style={{marginTop:"60px"}} type="reset" variant="danger" onClick={handleDelete}>Eliminar</Button>

<Form onSubmit={handleSubmit(onSubmit)}>
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
   <Button type="submit" variant="primary">Guardar</Button>
        </Form>
        </>
    )
}