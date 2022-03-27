import axios from "axios";

import { Footer } from "@/components/Footer";
import { Head } from "@/components/Head";
import { PokemonCard } from "@/features/pokemon/components/PokemonCard";

import type { GetStaticProps, NextPage } from "next";

type ResType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};

type Props = {
  data: ResType;
};

const Home: NextPage<Props> = ({ data }) => {
  const items = data.results.map(({ url }) => (
    <PokemonCard key={url} url={url} />
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
  type ResType = {
    count: number;
    next: string | null;
    previous: string | null;
    results: { name: string; url: string }[];
  };

  const { data } = await axios.get<ResType>(
    "https://pokeapi.co/api/v2/pokemon",
    {
      params: {
        offset: 0,
        limit: 151,
      },
    }
  );

  return { props: { data } };
};
