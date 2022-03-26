import NextImage from "next/image";

import { Spinner } from "@/components/Elements";
import { Typography } from "@/components/Elements";

import { usePokemon } from "../hooks/usePokemon";

type Props = {
  url: string;
};

export const PokemonCard = ({ url }: Props) => {
  const { data } = usePokemon(url);

  return (
    <a className="flex flex-col items-center justify-center rounded-sm border border-gray-400 capitalize shadow transition-transform hover:scale-105 hover:shadow-lg">
      {data ? (
        <>
          <NextImage src={data.imageUrl} width={128} height={128} />
          <Typography.Text>{data.name}</Typography.Text>
        </>
      ) : (
        <div className="p-5">
          <Spinner />
        </div>
      )}
    </a>
  );
};
