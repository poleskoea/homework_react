import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { dishes } from "../data/dishes";
import Button from "./Button";

const Menu = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (newItem) => {
    const existingCartItemIndex = cart.findIndex(
      (item) => item.name === newItem.name
    );

    const existingCartItem = cart[existingCartItemIndex];
    let updatedCart = [...cart];
    let updatedItem;

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedCart[existingCartItemIndex] = updatedItem;
    } else {
      updatedItem = { ...newItem, amount: 1 };
      updatedCart = updatedCart.concat(updatedItem);
    }
    console.log(updatedCart);
    setCart(updatedCart);
  };

  return (
    <>
      <h1 className="text-center text-3xl">Menu</h1>
      <div className="grid grid-cols-4">
        <ul className="grid-span-1">
          {dishes.map((dish) => (
            <li
              key={dish.id}
              className="border text-2xl text-center flex flex-col"
            >
              <span>
                <Link className="" to={dish.name}>
                  <div className="bg-slate-300 rounded-lg">{dish.name}</div>
                </Link>
              </span>
              <Button onClick={() => handleAddToCart(dish)} className="text-sm">
                Добавить в корзину
              </Button>
            </li>
          ))}
        </ul>
        <Outlet className="grid-span-2" />
        <div className="text-2xl text-center">
          <h1>Корзина:</h1>
          <Cart cart={cart} />
          <Button onClick={() => setCart([])}>Очистить корзину</Button>
        </div>
        <div>
          <Link to="/">
            <Button>Back to main page</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;

const Cart = ({ cart }) => {
  return (
    <ul className="text-2xl text-center">
      {cart.map((item) => (
        <li className="" key={item.name}>
          {item.name} : {item.amount}
        </li>
      ))}
    </ul>
  );
};
