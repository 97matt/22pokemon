import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [selectedPok, setselectedPok] = useState("");
  const goTo = useNavigate();

  useEffect(() => {
    getPokemones();
  }, []);

  const getPokemones = async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
    setPokemones(res.data.results);
  };

  const handleClick = () => {
    if (selectedPok) goTo("/pokemones/" + selectedPok);
    else alert("choose a pokemon");
  };
  return (
    <div className="container">
      <h1>Selecciona un Pokemon</h1>
      <select onChange={(e) => setselectedPok(e.target.value)}>
        <option>Select Pokemone</option>
        {pokemones?.map((p) => (
          <option key={p.url} value={p.name}>
            {p.name}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>Ver Detalle</button>
    </div>
  );
};

export default Pokemones;
