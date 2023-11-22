import React from "react";
import { CartContainer } from "../containers/CartContainer";
import Button from "./Button";

const Cart = () => {
  const { cart, handleRemoveFromCart, handleEmptyCart } =
    CartContainer.useContainer();

  return (
    <ul className="text-2xl text-center">
      {cart.map((item) => (
        <li className="" key={item.name}>
          {item.name} : {item.amount}
          <button
            className="text-sm"
            onClick={() => handleRemoveFromCart(item.name)}
          >
            &times;
          </button>
        </li>
      ))}
      {cart.length > 0 && (
        <Button onClick={handleEmptyCart}>Очистить корзину</Button>
      )}
    </ul>
  );
};

export default Cart;
