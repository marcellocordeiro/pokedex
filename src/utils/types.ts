import type { ParsedUrl } from "query-string";

export type PokemonType = {
  id: number;
  name: string;
  imageUrl: string;
};

export type PokemonListType = {
  count: number;
  previous: ParsedUrl | null;
  next: ParsedUrl | null;
  results: PokemonType[];
};
