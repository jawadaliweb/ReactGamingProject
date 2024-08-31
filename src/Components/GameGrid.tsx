import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";

export const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      <SimpleGrid columns={{sm:1,md:3,lg:4,xl:4}} spacing={5 } padding={'10px'}>
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
      {error && <p>{error}</p>}
    </>
  );
};
