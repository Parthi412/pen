import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { updateCart } from './Crete';


function Show() {
  const ironCa = useSelector((state) => state.cart.cartItem);
  const dis = useDispatch();

  const increment = (id, quantity) => {
    dis(updateCart({ id, quantity: quantity + 1 }));
  };

  const dec = (id, quantity) => {
    dis(updateCart({ id, quantity: quantity - 1 }));
  };

  return (
    <div>
      {ironCa.map((bag) => (
        <div key={bag.id}>
          <h1>{bag.tittle}</h1>
          <img src={bag.img} alt={bag.tittle} />
          <p>{bag.price}</p>
          <button onClick={() => increment(bag.id, bag.quantity)}>+</button>
          {bag.quantity}
          <button onClick={() => dec(bag.id, bag.quantity)}>-</button>
        </div>
      ))}
    </div>
  );
}

export default Show;
