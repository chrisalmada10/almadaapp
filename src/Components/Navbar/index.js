import React from "react"; 
import  logo from "../assets 1/logoImagen.png";
import "./Navbar.css"


const menuItems=[
    {
        id:1,
        label: "Ofertas"
    },
    {
        id:2,
        label: "Outlet" 
    },
    {
        id:3,
        label: "Tendencias"
    },
];

const Navbar = () => {
    return (
        <> 
        <div className="nav">
            <h1 className="nav-logo">GiocaStore</h1>
            <div>

                {menuItems.map((item) => (
                <a href="/" className="nav-item" key={item.id}>
                    {item.label}
            </a>
            ))}
            </div>
            
        </div>
        </>
        );
    };

export default Navbar;
