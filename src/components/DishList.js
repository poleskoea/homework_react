import React from "react";
import Dish from "./Dish";

const DishList = (props) => {
  return (
    <ul>
      {props.food.map((dish) => (
        <Dish dish={dish} />
      ))}
    </ul>
  );
};

export default DishList;
