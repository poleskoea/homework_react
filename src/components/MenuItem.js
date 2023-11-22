import React from "react";
import { useParams } from "react-router-dom";
// import { dishes } from "../data/dishes";

import { DishesContainer } from "../containers/DishesContainer";

const MenuItem = () => {
  const { dishes } = DishesContainer.useContainer();

  const { name } = useParams();

  const dish = dishes.find((dish) => dish.name === name);

  return (
    <div className="text-center ">
      <div>
        <h2 className="text-xl text-center">{dish.name}</h2>
        <img className="" src={`/img/${dish.name}.jpg`} alt={dish.name} />
      </div>
      <div>
        <h1 className="text-xl text-center">Описание:</h1>
        <span>{dish.description}</span>
        <span> Цена: {dish.price.toFixed(2)}руб</span>
      </div>
    </div>
  );
};

export default MenuItem;
