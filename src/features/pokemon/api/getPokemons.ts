import axios from "axios";

import { getPokemon } from "./getPokemon";

import type { PokemonQuery } from "./getPokemon";

export const getPokemons = async (): Promise<PokemonQuery[]> => {
  type ResType = {
    count: number;
    next: string | null;
    previous: string | null;
    results: { name: string; url: string }[];
  };

  const { data } = await axios.get<ResType>(
    "https://pokeapi.co/api/v2/pokemon",
    {
      params: {
        offset: 0,
        limit: 151,
      },
    }
  );

  const allPokemons = await Promise.all(
    data.results.map(({ name }) => getPokemon(name))
  );

  return allPokemons;
};
