
import './App.css';
import Laptops from './Component/Laptops/Laptops';
import Header from './Component/Header/Header';
import { useState } from 'react';
import ShowCart from './Component/ShowCart/ShowCart';
import Rendom from './Component/RandomlyLaptop/Random';


function App() {
  const [cart, setCart] =useState([])
  const cartAdd = (laptop) =>{
    if(!cart.includes(laptop)){
      setCart([...cart, laptop]);
    }
    else{
      alert("Already add this item")
    }
    
  }
  const [rend, setRendom] = useState({});
  const [showRand, setRand] = useState('none')
  // delete a item from a cart 
  const delItem = (id)=>{
    setCart(cart.filter(laptop => laptop.id !== id))
    setRand('none')
  }


  const rendom =()=>{
    const rendomSelect = Math.floor(Math.random()*cart.length);
    setRendom({...cart[rendomSelect],showRandom: setRand})
  }
  return (
    <div>
      <Header></Header>
      <section  className='product'>
        <div className="productContainer">
          <Laptops cart={cartAdd}></Laptops>
        </div>
      
      <div className='cart-container'>

        <h2>Product info</h2>
        {
          cart.map(cart=><ShowCart cart={cart} newCart={delItem}/>)
        }
        <button className='cartButton buttonRemove' onClick={()=>setCart([])}>Remove all</button>
        <button onClick={rendom} className='cartButton buttonRandom'>Choose Rendomly</button>
        <div style={{display: showRand}}>
          <Rendom rend={rend}></Rendom>
        </div>
      </div>
      </section>
        
    </div>
  );
}

export default App;
