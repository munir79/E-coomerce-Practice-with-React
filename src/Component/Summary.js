import React from 'react';

const Summary = (props) => {
    
    const cart=props.cart;
    let total=0;
    for (const num of cart){
          total=total+num.price;

    }

    return (
        <div>
             <h3> summary</h3>
      <h4> Selected Item: {cart.length} </h4>
      <h3> Price:{total} </h3>
        </div>
    );
};

export default Summary;