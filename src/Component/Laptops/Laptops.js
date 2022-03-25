import React from 'react';
import { useEffect, useState } from 'react';
import Laptop from '../Laptop/Laptop';
import './Laptops.css'
const Laptops = (props) => {
    const cartAdd = props.cart;
    const [laptop, setLaptop] = useState([])
    useEffect(()=>{
        fetch('./data/data.json')
        .then(res=>res.json())
        .then(data => setLaptop(data))
    },[])
    return (
        <div className='laptops'>
            {
                laptop.map(laptop=><Laptop cart={cartAdd} key={laptop.id} data={laptop}/>)
            }
        </div>
    );
};

export default Laptops;