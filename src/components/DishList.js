import React from "react";
import Dish from "./Dish";

const DishList = (props) => {
  return (
    <ul>
      {props.food.map((dish) => (
        <li>
          <Dish dish={dish} onAddToCart={props.onAddToCart} />
        </li>
      ))}
    </ul>
  );
};

export default DishList;
