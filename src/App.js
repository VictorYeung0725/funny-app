import { useState } from 'react';
import { cart1, cart2 } from './data.js';
import Cart from './Cart.jsx';

const App = () => {
  const [cartA, setCartA] = useState(cart1);
  const [cartB, setCartB] = useState(cart2);

  function swapOdd() {
    let newCartA = [...cartA];
    let newCartB = [...cartB];

    for (let i = 0; i < cartA.length; i += 2) {
      newCartB[i] = cartA[i];
      newCartA[i] = cartB[i];
    }
    setCartA(newCartA);
    setCartB(newCartB);
  }

  return (
    <div className="flex page">
      <Cart items={cartA} />
      <button onClick={swapOdd}>Swap Odd</button>
      <Cart items={cartB} />
    </div>
  );
};

export default App;
