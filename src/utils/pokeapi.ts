import axios from "axios";
import queryString from "query-string";

import type { PokemonListType, PokemonType } from "./types";

const API_URL = "https://pokeapi.co/api/v2";

const api = axios.create({
  baseURL: API_URL,
});

export const getPokemonList = async ({
  offset = 0,
  limit = 60,
} = {}): Promise<PokemonListType> => {
  type ResType = {
    count: number;
    next: string | null;
    previous: string | null;
    results: { name: string; url: string }[];
  };

  const res = await api.get<ResType>("/pokemon", {
    params: {
      offset,
      limit,
    },
  });

  const { previous, next, results, ...rest } = res.data;

  // This should be optimised
  const withImageUrl = await Promise.all(
    results.map(async ({ url }) => {
      type ResType = {
        id: number;
        name: string;
        sprites: {
          front_default: string;
        };
        [key: string]: unknown;
      };

      const { data } = await axios.get<ResType>(url);

      return {
        id: data.id,
        name: data.name,
        imageUrl: data.sprites.front_default,
      };
    })
  );

  return {
    previous: previous ? queryString.parseUrl(previous) : null,
    next: next ? queryString.parseUrl(next) : null,
    results: withImageUrl,
    ...rest,
  };
};

export const getPokemon = async ({
  id,
}: {
  id: string;
}): Promise<PokemonType> => {
  type ResType = {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
    [key: string]: unknown;
  };

  const res = await api.get<ResType>(`/pokemon/${id}`);
  const data = res.data;

  return {
    id: data.id,
    name: data.name,
    imageUrl: data.sprites.front_default,
  };
};
