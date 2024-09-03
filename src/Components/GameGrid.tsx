import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";

export const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const Skeletons = Array.from({ length: 20 }, (i) => i);

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 4, xl: 4 }}
        spacing={5}
        padding={"10px"}
        mt={20}
      >
        {isLoading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton as React.Key}></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {data.map((game) => (
          
          <GameCardContainer>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
      {error && <p>{error}</p>}
    </>
  );
};
