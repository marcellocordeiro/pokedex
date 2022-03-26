import useSWR from "swr";

import { fetcher } from "@/utils/fetcher";

const pokemonFetcher = async (url: string) => {
  type ResType = {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
    [key: string]: unknown;
  };

  const data = await fetcher<ResType>(url);

  return {
    id: data.id,
    name: data.name,
    imageUrl: data.sprites.front_default,
  };
};

export const usePokemon = (url: string) => {
  const { data } = useSWR(url, pokemonFetcher);

  return { data };
};
