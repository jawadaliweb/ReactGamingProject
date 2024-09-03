import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

export const CriticScore = ({ score }: Props) => {
  return (
    <Badge paddingX={3} borderRadius={4} fontSize={15} colorScheme={score > 75 ? "green" : score > 50 ? "yellow" : "red"}>
      { score }
    </Badge>
  );
};
