import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import { supabase } from "../lib/supabase";

function useDishes() {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    supabase
      .from("dishes")
      .select()
      .then(({ data, error }) => {
        if (error) return console.log(error);
        setDishes(data);
      });
  }, []);
  return { dishes };
}

export const DishesContainer = createContainer(useDishes);
