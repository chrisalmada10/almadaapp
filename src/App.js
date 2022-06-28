import React from "react"; 
import Navbar from "./Components/Navbar";
import "./App.css";
import ItemListConteiner from "./Components/ItemListConteiner";
import  'bootstrap/dist/css/bootstrap.min.css';






function App  () {
    return (
    <> 
    <Navbar/>
    <ItemListConteiner greeting="Bienvenidos"/>
  
    </>
);          
}

export default App