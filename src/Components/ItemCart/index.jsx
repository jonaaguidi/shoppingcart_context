import React, { useContext } from "react";
import "./ItemCart.css"
import {CartContext} from "../../Context/CartContext";

const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { addProductsToCart, deleteProducts } = useContext(CartContext);

  return (
    <div className="cartItem">
      <img src={item.img} alt={item.name} />
      <div className="dataContainer">
        <div className="left">
          <p>{item.name}</p>
          <div className="buttons">
            <button onClick={() => addProductsToCart(item)}>
              AGREGAR
            </button>
            <button onClick={() => deleteProducts(item)}>
              SACAR
            </button>
          </div>
        </div>
        <div className="right">
          <div>{item.amount}</div>
          <p>Total: ${item.amount * item.price}</p>
        </div>
      </div>
    </div>
  );
};

export { ItemCart };