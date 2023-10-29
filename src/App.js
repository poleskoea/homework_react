// import "./App.css";

import { Link } from "react-router-dom";

function App() {
  return (
    <div className="h-screen bg-stone-800">
      <header className="text-white text-5xl text-center">
        Ресторан "У Евгения"
      </header>
      <Link to="/menu" className="ml-4 text-white text-3xl font-bold underline">
        Menu
      </Link>
      <Link
        to="/about"
        className="ml-4 text-white text-3xl font-bold underline"
      >
        About
      </Link>
    </div>
  );
}

export default App;
