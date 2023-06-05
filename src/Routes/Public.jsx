import { Route, Routes } from "react-router-dom"
import Formulario from "../Pages/Principalview"
import Detail from "../Pages/Detail"
import Buystage from "../componentes/Buystage"
import Singup from "../Pages/Singup"
import Login from "../Pages/Login"
import Alta from "../Pages/Alta"
import Modifprod from "../componentes/Modifprod"

function Public () {

    return (
   
<Routes>

    <Route path = '/' element = {<Formulario />} />
    <Route path = '/buystage/:dat' element = {<Buystage />} />
    <Route path = '/productos' element = {<Formulario />} />
    <Route path = '/login' element = {<Login />} />
    <Route path = '/alta' element ={<Alta />} />
    <Route path = '/modif/:id' element ={<Modifprod />} />
    <Route path = '/plop/:val' element = {<Detail />} />
    <Route path = '/singup' element = {<Singup />} />
   

   
</Routes>)

}

export default Public