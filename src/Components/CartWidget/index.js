import React from  'react';
import shopping_cart from "../assets 1/logoTienda.jpg";
import "./styles.css"

const CartWidget = () => {
    return (
        <button>
            <img src={shopping_cart} alt="Cart Icon"/>
        </button>
    );

}

export default CartWidget;