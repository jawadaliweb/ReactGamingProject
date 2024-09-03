import { Box, HStack, Image, useColorModeValue } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { Input } from "@chakra-ui/react";
import { ColorModeSwitch } from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      height={"70px"}
      width={"100%"}
      zIndex={1}
      pos={"fixed"}
      top={0}
    >
      <HStack
        px={["10px", "10"]}
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
        position={"sticky"}
      >
        <Image src={logo} boxSize={"60px"} />
        <Input placeholder="Search..." htmlSize={40} width="auto" />
        <ColorModeSwitch />
      </HStack>
    </Box>
  );
};
