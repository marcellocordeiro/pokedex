import Image from "next/image";

import { getPokemon, getPokemonList } from "@/utils/pokeapi";

import type { PokemonType } from "@/utils/types";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

type Props = {
  data: PokemonType;
};

const PokemonDetails: NextPage<Props> = ({ data }) => (
  <div className="flex flex-col items-start">
    {data.sprites.front_default != null ? (
      <Image
        src={data.sprites.front_default}
        alt={data.name}
        width={128}
        height={128}
      />
    ) : null}

    <div>Pokémon ID: {data.id}</div>
    <div>Pokémon name: {data.name}</div>
  </div>
);

export default PokemonDetails;

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await getPokemonList();

  const paths = results.map(({ name }) => ({
    params: {
      id: name,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;

  const data = await getPokemon({ name: id });

  return {
    props: {
      data,
    },
  };
};
