/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import PokemonCard from './components/PokemonCard';
import { PokeCardContainer } from './components/styles';
import { RawPokemonData, PokemonData } from './pokemondata';

const fetchPokemonData = async (url : string) : Promise<any> => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const App: React.FC = () => {
  const [pokemon, setPokemon] = useState<PokemonData[]>([]);

  const renderPokemon = async (pokemonUrl : string) : Promise<PokemonData> => {
    const result : PokemonData = await fetchPokemonData(pokemonUrl).then((jsonData) => {
      const pokemonData : PokemonData = {
        name: jsonData.name,
        number: jsonData.id,
        types: jsonData.types.map((type : any) => type.type.name),
        spriteUrl: jsonData.sprites.front_default,
      };
      return pokemonData;
    });
    return result;
  };

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) => {
        Promise.all<PokemonData>(data.results.map((item : RawPokemonData) => renderPokemon(item.url)))
          .then((results) => setPokemon(results));
      });
  }, []);

  return (
    <div className="App">
      <h1>Pokédex</h1>
      <PokeCardContainer>
        {pokemon.map((item) => <PokemonCard name={item.name} key={item.number} spriteUrl={item.spriteUrl} types={item.types} number={item.number} />)}
      </PokeCardContainer>
    </div>
  );
};
export default App;
