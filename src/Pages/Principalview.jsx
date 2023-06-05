import { useEffect, useState } from "react";
import Campos from "../componentes/Camposform";
import {getDataByFB} from "../Services/componentservices";
import ProgressBar from 'react-bootstrap/ProgressBar';




function Formulario () { 
const [items,setItems] = useState([])
const [isloading, setIsLoading] = useState(true)
  useEffect( () => { 
    const infValue = async () => {
    try {
      const response = await getDataByFB()
      
        setItems(response)
      console.log(response)
      setTimeout(() => {
        setIsLoading(false)  
      }, 2000);
       
        }
  catch (e) {
      console.log("error inesperado")
    }}
    
  infValue()
  } ,[])

  if (isloading) {
    return (<div className="progressBar"><ProgressBar style={{marginTop:"60px"}} variant="success" animated={true} now={100} />
            <div>Now Loading</div></div>)
  }
  else {
   
    return (
      
      <div>
     
        <div>{items.map((caract, index) => 
           <Campos key={index}  {...caract.data()} id={caract.id}/>)}
       
        </div>

        
      
      </div>)
  }
  
  }


  


export default Formulario