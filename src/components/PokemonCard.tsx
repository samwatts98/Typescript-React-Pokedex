/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { PokemonData, typesAndColor } from '../pokemondata';

const PokeCard = styled('div')<{typeColor: string;}>`

  position: relative;

  .cardface {
    background-color: ${(props) => props.typeColor}; 
    border: 5px solid #e1ca58;
    border-radius: 10px;
    box-shadow: 10px 10px 8px -3px rgba(0,0,0,0.47);

    padding: 5px;
    margin: 1rem;
    width: 15em;
    height: 20rem;

    backface-visibility: hidden;
    transition: transform .8s ease;
    perspective: 75rem;

    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
  }

  .back {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
  }
  :hover .front {
      transform: rotateY(-180deg);
  }
  :hover .back {
      transform: rotateY(0deg);
  }

`;

const PokemonSprite = styled.img`
  border: 2px solid #e1ca58;
  border-radius: 2px; 
  width: 60%;
  -webkit-box-shadow: 10px 10px 8px -3px rgba(0,0,0,0.47);
  -moz-box-shadow: 10px 10px 8px -3px rgba(0,0,0,0.47);
  box-shadow: 10px 10px 8px -3px rgba(0,0,0,0.47);
`;

const PokemonTypeIndicator = styled('p')<{typeColor: string}>`
  color: white;
  background-color: ${(props) => props.typeColor};
  width: fit-content;
  border-radius: 10px;
  border-top: 3px solid rgba(255, 255, 255, 0.5);
  border-bottom: 3px solid rgba(0, 0, 0, 0.5);
  font-size: 0.8rem;
  padding: 4px;
  margin: 6px;
`;

export const InlineContainer = styled.div`
  display: inline-flex;
  justify-content: space-around;
  margin: 1rem;
  width: 100%;
`;

const capFirstLetter = (str: string) : string => str.charAt(0).toUpperCase() + str.slice(1);

const PokemonCard : React.FC<PokemonData> = ({
  name, spriteUrl, number, types,
}) => (
  <PokeCard typeColor={typesAndColor[types[0]]}>
    <div className="front cardface">
      <h3>{capFirstLetter(name)}</h3>
      <PokemonSprite src={spriteUrl} alt={`${name} sprite`} />
      <InlineContainer>
        {types.map((type, idx) => <PokemonTypeIndicator key={idx} typeColor={typesAndColor[type]}>{type.toUpperCase()}</PokemonTypeIndicator>)}
      </InlineContainer>
    </div>
    <div className="back cardface">
      <h1>Stats</h1>

    </div>
  </PokeCard>
);
export default PokemonCard;
