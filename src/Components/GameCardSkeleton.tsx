import { Box, Skeleton, SkeletonCircle, SkeletonText, useColorModeValue } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <>
      <Box width={400}  boxShadow="lg" bg={useColorModeValue("gray.100", "gray.900")} borderRadius={10} height={400}>
        <SkeletonText overflow={'none'} noOfLines={1} spacing="1" skeletonHeight="225" />
        <SkeletonText mt="5" noOfLines={4} spacing="4" skeletonHeight="2" paddingX={6}/>
      </Box>
    </>
  );
};
  