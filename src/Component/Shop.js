import React, { useEffect, useState } from 'react';
import ShowProduct from './ShowProduct';
import '../CSS/grid.css'

const Shop = () => {
    const [products,setProducts]=useState([]);
    useEffect( ()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div className='shopContainer'> 
    <div className='productContainer'>
   { products.map(product=><ShowProduct  product={product} key={product.id} ></ShowProduct>)}
    </div>
    <div className='sum'>
      <h3> summary</h3>
    </div>
        </div>
    );
};

export default Shop;