import logo from "./logo.svg";
import "./App.css";
import DishList from "./components/DishList";
import { food } from "./data/dishes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <DishList food={food} />
      </header>
    </div>
  );
}

export default App;
