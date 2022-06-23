import React from "react"; 
import  logo from "../assets 1/logoImagen.png";
import "./Navbar.css"
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';


const Navbar = () =>{
    return (
        <navbar>
            <img src={logo} alt=""/>
            <h1>Tienda Deportiva</h1>
            <nav>
                <a href=""> Ofertas</a>
                <a href=""> Tendencias</a>
                <a href=""> Outlet</a>
            </nav>
            <AddShoppingCartOutlinedIcon/>
            
        </navbar>
        )
        
}

export default Navbar