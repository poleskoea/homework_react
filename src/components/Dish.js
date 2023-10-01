import React from "react";

const Dish = (props) => {
  const addToCart = () => {
    props.onAddToCart({ ...props.dish });
  };
  return (
    <div className="m-2 flex items-center gap-2">
      <div>{props.dish.name}</div>

      <button
        onClick={addToCart}
        className="border border-solid border-1 p-2 rounded-2xl"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Dish;
