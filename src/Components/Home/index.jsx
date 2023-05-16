import React from 'react'
import { Cart } from "../Cart/index"
import { Products } from "../Products/index"
import "./Home.css"

const Home = () => {
  return (
    <div className='home'>
        <Cart />
        <Products />
    </div>
  );
}

export { Home };