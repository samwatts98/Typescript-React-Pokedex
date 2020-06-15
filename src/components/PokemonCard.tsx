/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { PokeCard, PokemonTypeIndicator, TypeContainer } from './styles';
import { PokemonData, typesAndColor } from '../pokemondata';

const capFirstLetter = (str: string) : string => str.charAt(0).toUpperCase() + str.slice(1);

const PokemonCard : React.FC<PokemonData> = ({
  name, spriteUrl, number, types,
}) => (
  <PokeCard>
    <h3>{`${number} - ${capFirstLetter(name)}`}</h3>
    <img src={spriteUrl} width="128" alt={`${name} sprite`} />
    <TypeContainer>
      {types.map((type) => <PokemonTypeIndicator typeColor={typesAndColor[type]}>{type.toUpperCase()}</PokemonTypeIndicator>)}
    </TypeContainer>
  </PokeCard>
);
export default PokemonCard;
