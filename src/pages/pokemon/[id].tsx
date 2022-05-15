import NextImage from "next/image";

import { Head } from "@/components/Head";
import { getPokemon, type PokemonQuery } from "@/features/pokemon";

import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

type Props = {
  data: PokemonQuery;
};

const PokemonDetails: NextPage<Props> = ({ data }) => (
  <div className="container mx-auto">
    <Head title={data.name} />

    <main>
      <div className="flex flex-col items-start">
        <NextImage
          src={data.imageUrl}
          alt={data.name}
          width={128}
          height={128}
        />

        <div>Pokémon ID: {data.id}</div>
        <div>Pokémon name: {data.name}</div>
      </div>
    </main>
  </div>
);

export default PokemonDetails;

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: "blocking",
});

/*const { results } = await getPokemonList();

  const paths = results.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));*/

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = params?.id as string;

  const data = await getPokemon(id);

  return {
    props: {
      data,
    },
  };
};
