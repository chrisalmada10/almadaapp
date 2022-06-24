import React from "react"; 
import CartWidget from "../CartWidget";
import "./styles.css"



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
            <div className="nav-items">
             {menuItems.map((item) => (
                <a href="/" className="nav-item" key={item.id}>
                    {item.label}
            </a>
            ))}
            </div>
            <CartWidget/>
        </div>
        </>
        );
    };

export default Navbar;
