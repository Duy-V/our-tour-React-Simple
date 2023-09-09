import React from "react";
import { DataType } from "./App";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

type CardItemProps = {
  item: DataType;
};
const CardItem: React.FC<CardItemProps> = ({ item }) => {
  return (
    <Flex direction="column" justify="center" align="center" p={6}>
      <Box
        mt={-4} // Adjust this for the overlap amount
        width="200px"
        overflow="hidden"
        height="200px"
        backgroundColor="blue.400"
        borderRadius="50%"
        boxShadow="lg"
      />
      <Flex position="relative">
        {" "}
        {/* New wrapper for positioning */}
        <InfoIcon
          boxSize="40px"
          position="absolute" // Absolutely position the icon relative to the wrapper
          left="-20px" // Adjust this to control overlap
          top="50%" // Center it vertically
          transform="translateY(-50%)"
          marginTop="-154px"
          marginLeft="0px"
          color="blue.400"
        />
        <Box
          borderRadius="50%"
          width="200px"
          overflow="hidden"
          height="200px"
          backgroundColor="pink"
          boxShadow="lg"
          mt={-4}
          marginTop="-185px"
          marginLeft="-20px"
        >
          <Image src={item.imgSrc} width="200px" height="200px" />
        </Box>
      </Flex>

      <Text>{item.reviews}</Text>
    </Flex>
  );
};

export default CardItem;
