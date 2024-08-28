import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { Input } from "@chakra-ui/react";

export const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"60px"} />
      <Input placeholder="Search..." bg="white" htmlSize={10} width="auto" />
    </HStack>
  );
};
