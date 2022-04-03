import { Footer } from "@/components/Footer";
import { Head } from "@/components/Head";
import { PokemonCard, getPokemons } from "@/features/pokemon";

import type { PokemonQuery } from "@/features/pokemon";
import type { GetStaticProps, NextPage } from "next";

type Props = {
  data: PokemonQuery[];
};

const Home: NextPage<Props> = ({ data }) => {
  const items = data.map((item) => <PokemonCard key={item.id} data={item} />);

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
  const data = await getPokemons();

  return { props: { data } };
};
