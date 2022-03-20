import type { ParsedUrl } from "query-string";

export type PokemonListType = {
  count: number;
  previous: ParsedUrl | null;
  next: ParsedUrl | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type PokemonType = {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
  };
};
