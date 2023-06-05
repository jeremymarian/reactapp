
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import Public from './Routes/Public';
import AuthProvider from "./context/AuthContext";
import Initpage from "./Pages/Initpage"
import 'bootstrap/dist/css/bootstrap.min.css'


function App () { 
    return (
      
<div className="App">
<AuthProvider>
<Router>
<Initpage />
<Public />

</Router>
</AuthProvider>

</div>)
  }


  


export default App
