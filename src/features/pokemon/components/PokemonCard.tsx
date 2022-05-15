import NextImage from "next/image";
import NextLink from "next/link";

import { Typography } from "@/components/Elements";

import type { PokemonQuery } from "../api/getPokemon";

type Props = {
  data: PokemonQuery;
};

export const PokemonCard = ({ data }: Props) => (
  <NextLink
    href={`/pokemon/${data.id}`}
    className="flex flex-col items-center justify-center rounded-sm border border-gray-400 capitalize shadow transition-transform hover:scale-105 hover:shadow-lg"
  >
    <NextImage src={data.imageUrl} width={128} height={128} />
    <Typography.Text>{data.name}</Typography.Text>
  </NextLink>
);
