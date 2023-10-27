import React from "react";
import Button from "./Button";

const Dish = (props) => {
  const addToCart = () => {
    props.onAddToCart({ ...props.dish });
  };
  return (
    <div className="m-2 flex items-center gap-2">
      <div>{props.dish.name}</div>

      <Button onClick={addToCart}>Add to cart</Button>
    </div>
  );
};

export default Dish;
