import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const [PokemonDetails, setPokemonDetails] = useState({});
  const { name } = useParams();

  useEffect(() => {
    getPokemonDetails();
  }, []);

  const getPokemonDetails = async () => {
    const { data } = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + name
    );
    console.log(data);
    setPokemonDetails({
      name: data.name,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defence: data.stats[2].base_stat,
      specialAttack: data.stats[3].base_stat,
      specialDefence: data.stats[4].base_stat,
      speed: data.stats[5].base_stat,
      type: data.types[0].type.name,
      image: data.sprites.front_default,
    });
  };

  console.log(PokemonDetails);
  return (
    <div className="pokemonContainer">
      <img src={PokemonDetails.image} alt={PokemonDetails.name} />
      <div>
        <h1>{PokemonDetails.name}</h1>
        <ul>
          <li>hp: {PokemonDetails.hp}</li>
          <li>attack: {PokemonDetails.attack}</li>
          <li>defence: {PokemonDetails.defence}</li>
          <li>special-attack: {PokemonDetails.specialAttack}</li>
          <li>special-defence: {PokemonDetails.specialDefence}</li>
          <li>speed: {PokemonDetails.speed}</li>
        </ul>
        <p>{PokemonDetails.type}</p>
      </div>
    </div>
  );
};

export default PokemonDetails;
