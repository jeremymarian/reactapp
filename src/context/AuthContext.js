import React, { useState } from "react"
import {getAuth} from "firebase/auth";
import firebase from "../Services/firebase";
export const AuthContext = React.createContext()

const AuthProvider = ({children}) => {



    const [login, setLogin] = useState(false)
    const [userName, setUserName] = useState()
  

    const handlerLogin =  async () => {
        setLogin(true)
        localStorage.setItem("login",true)
        const auth = getAuth().currentUser.uid
        const userResponse = await firebase.firestore().collection("usuarios")
             .where("userId","==",auth)
             .get()
        const user = userResponse.docs[0].data()
        setUserName(user?.name)
        localStorage.setItem("userName",user?.name) 
        
            
  
           
            
       


        }
        
       
  
              
         


    const handlerLogOut = () => {
        setLogin(localStorage.removeItem("login"))
        setUserName(localStorage.removeItem("userName"))
        }
     
         
  
        
      


       

return (
    <AuthContext.Provider
    value={{login ,handlerLogin, handlerLogOut,userName}}>

    {children}
    </AuthContext.Provider>
)

    }

    export default AuthProvider
