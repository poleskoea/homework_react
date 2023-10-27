// import "./App.css";
import DishList from "./components/DishList";
import { dishes } from "./data/dishes";
import { useState } from "react";
import { Link } from "react-router-dom";

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
    <div>
      <header className="flex flex-col items-center bg-stone-800">
        <p className=" text-white text-3xl font-bold underline">Cart:</p>
        <ul>
          {cart.map((item) => {
            return (
              <li className="text-white">
                {item.name} : {item.amount}
              </li>
            );
          })}
        </ul>
        <p className="text-white text-3xl font-bold underline">Menu:</p>
        <DishList food={dishes} onAddToCart={addToCartHandler} />
        <Link to="/menu" className="border text-white bg:olive">
          fgfgfgg
        </Link>
      </header>
    </div>
  );
}

export default App;
