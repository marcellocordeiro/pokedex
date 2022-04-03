import NextImage from "next/image";

import { Typography } from "@/components/Elements";

import type { PokemonQuery } from "../api/getPokemon";

type Props = {
  data: PokemonQuery;
};

export const PokemonCard = ({ data, ...rest }: Props) => (
  <a
    className="flex flex-col items-center justify-center rounded-sm border border-gray-400 capitalize shadow transition-transform hover:scale-105 hover:shadow-lg"
    {...rest}
  >
    <NextImage src={data.imageUrl} width={128} height={128} />
    <Typography.Text>{data.name}</Typography.Text>
  </a>
);
