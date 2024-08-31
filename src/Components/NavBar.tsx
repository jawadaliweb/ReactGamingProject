import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { Input } from "@chakra-ui/react";
import { ColorModeSwitch } from "./ColorModeSwitch";

export const NavBar = () => {
  return (
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
  );
};
