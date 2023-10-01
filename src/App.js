import logo from "./logo.svg";
import "./App.css";
import DishList from "./components/DishList";
import { food } from "./data/dishes";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const addToCartHandler = (newItem) => {
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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl font-bold underline">Cart:</p>
        <ul>
          {cart.map((item) => {
            return (
              <li>
                {item.name} : {item.amount}
              </li>
            );
          })}
        </ul>
        <p className="text-3xl font-bold underline">Menu:</p>
        <DishList food={food} onAddToCart={addToCartHandler} />
      </header>
    </div>
  );
}

export default App;
