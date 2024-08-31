import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { PlatformIconList } from "./PlatformIconList";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image
          src={game.background_image}
          alt={game.name}
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <p>Rating: {game.rating}</p>
          <p>Released: {game.released}</p>
          <p>TBA: {game.tba}</p>
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
        </CardBody>
      </Card>
    </>
  );
};
