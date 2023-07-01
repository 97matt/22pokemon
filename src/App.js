import Navbar from "./components/Navbar";
import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import PokemonDetails from "./views/PokemonDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<PokemonDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
