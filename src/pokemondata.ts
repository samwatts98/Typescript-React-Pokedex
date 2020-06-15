export interface PokemonData {
  name: string,
  types: [string],
  spriteUrl: string,
  number: number,
}

export interface RawPokemonData {
  name: string,
  url: string,
}
interface PokemonTypeAndColorDict {
  [type: string] : string;
}
export const typesAndColor : PokemonTypeAndColorDict = {};

typesAndColor.normal = '#A8A77A';
typesAndColor.fire = '#EE8130';
typesAndColor.water = '#6390F0';
typesAndColor.electric = '#F7D02C';
typesAndColor.grass = '#7AC74C';
typesAndColor.ice = '#96D9D6';
typesAndColor.fighting = '#C22E28';
typesAndColor.poison = '#A33EA1';
typesAndColor.ground = '#E2BF65';
typesAndColor.flying = '#A98FF3';
typesAndColor.psychic = '#F95587';
typesAndColor.bug = '#A6B91A';
typesAndColor.rock = '#B6A136';
typesAndColor.ghost = '#735797';
typesAndColor.dragon = '#6F35FC';
typesAndColor.dark = '#705746';
typesAndColor.steel = '#B7B7CE';
typesAndColor.fairy = '#D685AD';
