import React from 'react'
import "./Products.css"
import { ProductsData } from '../../Data/ProductsData';

function Products() {
  return (
    <div className='productsContainer'>
      {ProductsData.map((product, i) => (
        <div className='product' key={i}>
          <img src={product.img} alt={product.name} />
            <div>
            <p>{product.name} - ${product.price}</p>
            </div>
          <button onClick={() => console.log(product)}>Añadir al Carrito</button>
        </div>
      ))}
    </div>
  );
}

export { Products };
