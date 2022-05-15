import axios from "axios";

export type PokemonQuery = {
  id: number;
  name: string;
  imageUrl: string;
};

/*
const getImageUrl = (id: number) =>
  `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id
    .toString()
    .padStart(3, "0")}.png`;
*/

export const getPokemon = async (name: string): Promise<PokemonQuery> => {
  type ResType = {
    id: number;
    name: string;
    sprites: {
      other: {
        "official-artwork": {
          front_default: string;
        };
      };
    };
    [key: string]: unknown;
  };

  const { data } = await axios.get<ResType>(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

  return {
    id: data.id,
    name: data.name,
    imageUrl: data.sprites.other["official-artwork"].front_default,
  };
};
