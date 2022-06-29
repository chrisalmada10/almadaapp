import React from "react"; 
import Navbar from "./Components/Navbar";
import "./App.css";
import ItemListConteiner from "./Components/ItemListConteiner";


function App  () {
    return (
    <> 
    <Navbar/>
    <ItemListConteiner greeting={"Bienvenidos"}/>
    </>
);          
}

export default App