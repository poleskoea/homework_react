import React from "react";
import Dish from "./Dish";
import Button from "./Button";

const DishList = (props) => {
  return (
    <>
      <ul className="text-white border border-white my-2 flex shadow-xl shadow-cyan-700/30">
        {props.food.map((dish) => (
          <li>
            <Dish dish={dish} onAddToCart={props.onAddToCart} />
          </li>
        ))}
      </ul>
      <Button>Press</Button>
    </>
  );
};

export default DishList;
