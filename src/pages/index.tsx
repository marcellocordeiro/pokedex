import NextImage from "next/image";
import NextLink from "next/link";

import { Footer } from "@/components/Footer";
import { Head } from "@/components/Head";
import { getPokemonList } from "@/utils/pokeapi";

import type { PokemonListType } from "@/utils/types";
import type { GetStaticProps, NextPage } from "next";

type Props = {
  data: PokemonListType;
};

const Home: NextPage<Props> = ({ data }) => {
  const items = data.results.map(({ id, name, imageUrl }) => (
    <NextLink key={id} href={`/pokemon/${id}`} passHref>
      <a className="flex flex-col items-center justify-center border capitalize shadow transition-transform hover:scale-105 hover:shadow-lg">
        <NextImage src={imageUrl} width={128} height={128} />
        {name}
      </a>
    </NextLink>
  ));

  return (
    <div className="py-0 px-8">
      <Head title="Pokédex" />

      <main className="flex min-h-screen flex-1 flex-col items-center justify-center py-16 px-0">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">{items}</div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await getPokemonList();

  return { props: { data } };
};
