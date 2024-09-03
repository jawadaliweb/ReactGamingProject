import { Box, HStack, Image, Text, useColorModeValue } from "@chakra-ui/react";
import useData from "../hooks/UseData";
import useGenre, { Genre } from "../hooks/useGenre";
export const GenerList = () => {
  const { data, error, isLoading } = useGenre();
  return (
    <Box className="sidebar" style={{ padding: "20px", marginTop: "60px" }}>
      {data.map((item) => (
        <Box
          key={item.id}
          className="data-item"
          bg={useColorModeValue("white", "gray.700")}
          padding={2}
          cursor={"pointer"}
          marginY={2}
          borderRadius={8}
          boxShadow={"0 1px 3px rgba(0, 0, 0, 0.2)"}
          transition={"transform 0.3s"}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.05)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <HStack>
            <Image
              src={item.image_background}
              alt={item.name}
              boxSize="50px"
              objectFit="cover"
              mr="15px"
              borderRadius="10%"
              boxShadow="0 1px 3px rgba(0, 0, 0, 0.2)"
            />
            <Text
              style={{ fontSize: "16px", fontWeight: "600" }}
              color={useColorModeValue("gray.700", "white")}
            >
              {item.name}
            </Text>
          </HStack>
        </Box>
      ))}
    </Box>
  );
};
