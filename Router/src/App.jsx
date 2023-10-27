import './style/App.css'
import { BrowserRouter, Routes, Route } from "react-dom"//npm i react-router-dom

import Home from './componets/Home';
import Sobre from './componets/Sobre';
import Contato from './componets/Contato';

function App() {
  return (

   
     <div> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Sobre" element={<Sobre/>}/>
        <Route path="/Contato" element={<Contato/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  
   
  )
}

export default App
