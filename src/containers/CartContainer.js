import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";

const initialState = localStorage.getItem("cart");

function useCart() {
  const [cart, setCart] = useState(
    initialState ? JSON.parse(initialState) : []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function handleAddToCart(newItem) {
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
  }

  function handleRemoveFromCart(itemName) {
    const updatedCart = cart.filter((item) => item.name !== itemName);
    setCart(updatedCart);

    // const index = cart.findIndex((item) => item.name === itemName);

    // if (index >= 0) {
    //   cart.splice(index, 1);
    // }
    // setCart([...cart]);
  }

  function handleEmptyCart() {
    setCart([]);
  }

  return {
    cart,
    setCart,
    handleAddToCart,
    handleRemoveFromCart,
    handleEmptyCart,
  };
}

export const CartContainer = createContainer(useCart);
