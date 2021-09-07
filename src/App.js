import './App.css';
import Cart from './components/Cart/Cart';
import Slider from './components/Slider/Slider';
import React, {useState} from 'react';

function App() {

  const [cart, setCart] = useState([]);

  const Add = (el) => {
    setCart([...cart, el]);
  }

  const DeleteCart = () => {
    setCart([]);
  }
  
  const DeleteItem = (el) => {
    const newCart = cart.filter(item => item !== el);
    setCart(newCart)
  }

  return (
    <div className="App">
      <Slider Add={Add} cart={cart} />
      <div className='wholeCart'>
        <Cart DeleteItem={DeleteItem} DeleteCart={DeleteCart} cart={cart} number={cart.length}/>
      </div>
    </div>
  );
}

export default App;
