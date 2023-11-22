import { Outlet } from "react-router-dom";
import { CartContainer } from "./containers/CartContainer";
import { QueryClient, QueryClientProvider } from "react-query";
import { DishesContainer } from "./containers/DishesContainer";

const queryClient = new QueryClient();

function App() {
  return (
    <DishesContainer.Provider>
      <QueryClientProvider client={queryClient}>
        <CartContainer.Provider>
          <Outlet />
        </CartContainer.Provider>
      </QueryClientProvider>
    </DishesContainer.Provider>
  );
}

export default App;
