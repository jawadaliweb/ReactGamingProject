import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export const GameCardSkeleton = () => {
  return (
    <>
      <Box width={400}  boxShadow="lg" bg="gray.200" borderRadius={10} height={400}>
        <SkeletonText overflow={'none'} noOfLines={1} spacing="1" skeletonHeight="225" />
        <SkeletonText mt="5" noOfLines={4} spacing="4" skeletonHeight="2" paddingX={6}/>
      </Box>
    </>
  );
};
