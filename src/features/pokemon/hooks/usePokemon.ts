import useSWR from "swr";

import { fetcher } from "@/utils/fetcher";

const getImageUrl = (id: number) =>
  `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id
    .toString()
    .padStart(3, "0")}.png`;

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
    imageUrl: getImageUrl(data.id),
  };
};

export const usePokemon = (url: string) => {
  const { data } = useSWR(url, pokemonFetcher);

  return { data };
};
