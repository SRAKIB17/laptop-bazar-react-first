import React from 'react';
import './Laptop.css'
const Laptop = (props) => {
    const {name, id, price,image} = props.data
    const cartAdd = props.cart;
    
    return (
        <div className='laptop'>
            <img src={image} alt="" />
            <p className="name">{name}</p>
            <p className="price">Tk {price}</p>
            <button onClick={()=>cartAdd(props.data)}>Add to Cart</button>
        </div>
    );
};

export default Laptop;