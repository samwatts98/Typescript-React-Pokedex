import styled from 'styled-components';

export const PokeCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  `;

export const PokeCard = styled.div`
  display: flex;
  flex-flow: column;
  background-color: hsla(165, 32%, 47%, 1);
  border-radius: 10px;
  padding: 5px;
  border: 5px solid hsla(201, 33%, 27%, 1);
  margin: 1rem;
  width: 20%;
  min-width: 270px;
  max-width: 300px;
  align-items: center;
`;

export const PokemonTypeIndicator = styled('p')<{typeColor: string}>`
  color: white;
  background-color: ${(props) => props.typeColor};
  padding: 4px;
  width: fit-content;
  margin: 6px;
  border-radius: 10px;
  border-top: 3px solid rgba(255, 255, 255, 0.5);
  border-bottom: 3px solid rgba(0, 0, 0, 0.5);
  font-size: 0.8rem;
`;

export const TypeContainer = styled.div`
  display: inline-flex;
`;
