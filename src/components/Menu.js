import { Outlet, Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import Button from "./Button";
import Cart from "./Cart";
import { CartContainer } from "../containers/CartContainer";
// import { DishesContainer } from "../containers/DishesContainer";
import { useQuery } from "react-query";

const Menu = () => {
  const { handleAddToCart } = CartContainer.useContainer();
  // const { dishes } = DishesContainer.useContainer();

  const {
    data: dishes,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["dishes"],
    queryFn: async () => {
      const { data, error } = await supabase.from("dishes").select();

      if (error) throw new Error(error.message);

      return data;
    },
  });

  return (
    <>
      <h1 className="text-center text-3xl">Menu</h1>
      <div className="grid grid-cols-4">
        <ul className="grid-span-1">
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            dishes.map((dish) => (
              <li
                key={dish.id}
                className="border text-2xl text-center flex flex-col"
              >
                <Link className="" to={dish.name}>
                  <div className="bg-slate-300 rounded-lg">{dish.name}</div>
                </Link>

                <Button onClick={() => handleAddToCart(dish)}>
                  Добавить в корзину
                </Button>
              </li>
            ))
          )}
        </ul>
        <Outlet className="grid-span-2" />
        <Cart />

        <Link to="/">
          <Button>Back to main page</Button>
        </Link>
      </div>
    </>
  );
};

export default Menu;
