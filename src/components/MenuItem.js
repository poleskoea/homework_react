import React from "react";
import { useParams } from "react-router-dom";
import { dishes } from "../data/dishes";
// import Borsch from "../data/borsch.jpg";
// import Sushi from "../data/sushi.jpg";
// import Sagudai from "../data/sagudai.jpg";
// import Pancakes from "../data/pancakes.jpg";

const MenuItem = () => {
  const { name } = useParams();
  const dish = dishes.find((dish) => dish.name === name);
  console.log(dish);
  return (
    <div className="text-center ">
      <div>
        <h2 className="text-xl text-center">{dish.name}</h2>
        <img className="" src={`/img/${dish.name}.jpg`} alt={dish.name} />
      </div>
      <div>
        <h1 className="text-xl text-center">Описание:</h1>
        <span>{dish.description}</span>
        <span>{dish.price}руб</span>
      </div>
    </div>
  );
};

export default MenuItem;
