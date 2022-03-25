
import './App.css';
import Laptops from './Component/Laptops/Laptops';
import Header from './Component/Header/Header';
import { useState } from 'react';
import ShowCart from './Component/ShowCart/ShowCart';


function App() {
  const [cart, setCart] =useState([])
  const cartAdd = (laptop) =>{
    setCart([...cart, laptop]);
  }
  const [remove, setRemove] = useState('block')
  const [choose, setchoose] = useState('block')
  useState(()=>{
    // cart.length
  })
  // delete a item from a cart 
  const delItem = (id)=>{
    setCart(cart.filter(laptop => laptop.id != id))
  }
  return (
    <div>
      <Header></Header>
      <section  className='product'>
        <Laptops cart={cartAdd}></Laptops>
      
      <div>
        <h2>Product info</h2>
        {
          cart.map(cart=><ShowCart cart={cart} newCart={delItem}/>)
        }
        <button style={{display: remove}} className='cartButton buttonRemove' onClick={()=>setCart([])}>Remove all</button>
        <button style={{display: choose}} className='cartButton buttonRandom'>C</button>
      </div>
      </section>
        
    </div>
  );
}

export default App;
