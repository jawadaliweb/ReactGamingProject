import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <>
      
      <Card >
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platform={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <p>Rating: {game.rating}</p>
          <p>Released: {game.released}</p>
          <p>TBA: {game.tba}</p>
        </CardBody>
      </Card>
    </>
  );
};
