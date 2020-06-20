/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PokemonCard from './components/PokemonCard';
import { RawPokemonData, PokemonData } from './pokemondata';

const PokeCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  `;

const fetchData = async (url : string) : Promise<any> => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const App: React.FC = () => {
  const [pokemon, setPokemon] = useState<PokemonData[]>([]);

  const renderPokemon = async (pokemonUrl : string) : Promise<PokemonData> => {
    const result : PokemonData = await fetchData(pokemonUrl).then((data) => {
      const pokemonData : PokemonData = {
        name: data.name,
        number: data.id,
        types: data.types.map((type : any) => type.type.name),
        spriteUrl: data.sprites.front_default,
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
