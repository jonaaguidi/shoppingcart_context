import React, { useContext } from 'react'
import "./Products.css"
import { ProductsData } from '../../Data/ProductsData';
import { CartContext } from '../../Context/CartContext';

function Products() {
  const { addProductsToCart } = useContext(CartContext)

  return (
    <div className='productsContainer'>
      {ProductsData.map((product, i) => (
        <div className='product' key={i}>
          <img src={product.img} alt={product.name} />
            <div>
            <p>{product.name} - ${product.price}</p>
            </div>
          <button onClick={() => addProductsToCart(product)}>
            Añadir al Carrito
          </button>
        </div>
      ))}
    </div>
  );
}

export { Products };
