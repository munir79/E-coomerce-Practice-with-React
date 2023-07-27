import React, { useEffect, useState } from 'react';
import ShowProduct from './ShowProduct';
import '../CSS/grid.css'

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart=(product)=>{
        const newCart=[...cart , product];
        setCart(newCart);
    }
    return (
        <div className='shopContainer'> 
    <div className='productContainer'>
   { products.map(product=><ShowProduct  handleAddToCart={handleAddToCart}  product={product} key={product.id} ></ShowProduct>)}
    </div>
    <div className='sum'>
      <h3> summary</h3>
      <h4> Selected Item: {cart.length} </h4>
    </div>
        </div>
    );
};

export default Shop;