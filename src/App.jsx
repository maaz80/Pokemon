import React from "react";
import PokemonList from "./components/PokemonList";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen poppins-regular">
      <header className="text-center p-6 bg-teal-600 text-white">
        <h1 className="text-3xl font-bold">Pokémon Database</h1>
      </header>
      <main className="p-6">
        <PokemonList />
      </main>
    </div>
  );
};

export default App;
