import React from "react";
import { useParams } from "react-router-dom";
import { dishes } from "../data/dishes";

const MenuItem = () => {
  const { name } = useParams();
  const dish = dishes.find((dish) => dish.name === name);
  console.log(dish);
  return <div>{dish.name}</div>;
};

export default MenuItem;
