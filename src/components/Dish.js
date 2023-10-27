import React from "react";
import Button from "./Button";

const Dish = ({ dish, onAddToCart }) => {
  const addToCart = () => {
    onAddToCart({ ...dish });
  };
  return (
    <div className="m-2 flex items-center gap-2">
      <div>{dish.name}</div>

      <Button onClick={addToCart}>Add to cart</Button>
    </div>
  );
};

export default Dish;
