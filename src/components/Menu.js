import React from "react";
import { Outlet, Link } from "react-router-dom";
import { dishes } from "../data/dishes";
import Button from "./Button";

const Menu = () => {
  console.log(dishes);
  return (
    <>
      <h1 className="text-center text-3xl">Menu</h1>
      <div className="grid gap-2 grid-cols-4">
        <ul>
          {dishes.map((dish) => (
            <>
              <li key={dish.name} className="border">
                <span>
                  <Link to={dish.name}>{dish.name}</Link>-{dish.price}руб
                </span>
              </li>
              <Button>Добавить в корзину</Button>
            </>
          ))}
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default Menu;
