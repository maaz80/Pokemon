import React from "react";

const PokemonCard = ({ pokemon }) => {
    // Adding Colors according to type 
    const getTypeColor = (type) => {
        const colors = {
            grass: "bg-green-200",
            fire: "bg-red-200",
            water: "bg-blue-200",
            electric: "bg-yellow-200",
            ice: "bg-blue-100",
            rock: "bg-gray-300",
            ghost: "bg-purple-200",
            poison: "bg-purple-300",
            bug: "bg-green-300",
            normal: "bg-gray-100",
            fighting: "bg-red-400",
            flying: "bg-indigo-200",
            psychic: "bg-pink-200",
            ground: "bg-brown-200",
            fairy: "bg-pink-300",
            dragon: "bg-teal-200",
            steel: "bg-gray-400",
            dark: "bg-gray-800",
        };
        return colors[type] || "bg-gray-200"; // Default color
    };

    //   Taking types in lowercase
    const types = pokemon.types.map(type => type.type.name.toLowerCase());

    return (
        // Making Card 
        <div className={`shadow-lg  overflow-hidden transition-transform transform hover:scale-105 border border-gray-400 rounded-md ${getTypeColor(types[0])}`}>
            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="w-36 h-36 mx-auto mt-4 transition-transform transform hover:scale-125"
            />
            <div className="p-4 text-center">
                <h3 className="text-2xl font-bold mb-2 capitalize">{pokemon.name}</h3>
                <p className="text-gray-600">Types: {types.join(", ")}</p>
                <p className="text-gray-500">Height: {pokemon.height / 10} m</p>
                <p className="text-gray-500">Weight: {pokemon.weight / 10} kg</p>
                <p className="text-gray-500">Abilities: {pokemon.abilities.map(ability => ability.ability.name).join(", ")}</p>
            </div>
        </div>
    );
};

export default PokemonCard;
