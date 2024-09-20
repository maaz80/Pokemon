import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
        const data = await response.json();
        console.log(data);
        
        const promises = data.results.map((pokemon) => fetch(pokemon.url).then(res => res.json()));
        const pokemonDetails = await Promise.all(promises);
        setPokemons(pokemonDetails);
        setFilteredPokemons(pokemonDetails);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemons();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = pokemons.filter((pokemon) => 
      pokemon.name.toLowerCase().includes(value)
    );
    setFilteredPokemons(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={search}
        onChange={handleSearch}
        className="mb-6 p-2 w-[100%] border rounded-md"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
