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

    padding: 0.5rem;
    margin: 1rem;
    width: 15em;
    height: 20rem;

    backface-visibility: hidden;
    transition: transform .8s ease;

    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;
  }

  .back {
    position: absolute;
    justify-content: start;
    top: 0;
    left: 0;
    transform: rotateY(180deg);

    dl {
      list-style: none;
      margin-bottom: 0.75rem;
      font-size: 0.8rem;
      width: 100%;
      dd {
        position: fixed;
        right: 0.5rem;
      }
      dt:before {
        content:"";
        display: block;
        margin-bottom: 1rem;
      }
      dt, dd {
        display: inline;
      }
    } 
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

const InlineContainer = styled.div`
  display: inline-flex;
  justify-content: space-around;
  text-align: center;
  margin: 0.5rem;
  width: 100%;
`;

const capFirstLetter = (str: string) : string => str.charAt(0).toUpperCase() + str.slice(1);

const PokemonCard : React.FC<PokemonData> = ({
  name, spriteUrl, number, types, stats,
}) => (
  <PokeCard typeColor={typesAndColor[types[0]]}>
    <div className="front cardface">
      <InlineContainer>
        <h4>{`#${number}`}</h4>
        <h4>{capFirstLetter(name)}</h4>
      </InlineContainer>
      <PokemonSprite src={spriteUrl} alt={`${name} sprite`} />
      <InlineContainer>
        {types.map((type, idx) => <PokemonTypeIndicator key={idx} typeColor={typesAndColor[type]}>{type.toUpperCase()}</PokemonTypeIndicator>)}
      </InlineContainer>
    </div>
    <div className="back cardface">
      <InlineContainer>
        <h4>{`${capFirstLetter(name)} Stats`}</h4>
      </InlineContainer>
      <dl key="stat">
        {stats.map((stat) => (
          <React.Fragment key={stat.name}>
            <dt>{stat.name}</dt>
            <dd>{stat.value}</dd>
          </React.Fragment>
        ))}
      </dl>

    </div>
  </PokeCard>
);
export default PokemonCard;
