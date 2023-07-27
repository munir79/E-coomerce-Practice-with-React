import React from 'react';
import '../CSS/Show.css'
const ShowProduct = (props) => {
    console.log(props);
    const {name,img,price,ratings,seller}=props.product;
    return (
        <div className='show'>
     
            <div className='ima'>
                <img src={img} alt="" />
            </div>
            <div>
                <p>name:{name}</p>
                <h3> Price:{price}</h3>
                <h4> Seller:{seller}</h4>
                <h5> Ratings:{ratings} stars</h5>
            </div>
                 <button> Buy Now </button>
        </div>
    );
};

export default ShowProduct;