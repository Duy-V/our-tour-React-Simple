import React, { useState } from "react";
import { DataType } from "./App";
import {
  ButtonGroup,
  Card,
  CardBody,
  Divider,
  Heading,
  Stack,
  Text,
  Button,
  Image,
  Badge,
  Box,
} from "@chakra-ui/react";
import { CardFooter } from "@chakra-ui/react";
type CardItemProps = {
  item: DataType;
};
const CardItem: React.FC<CardItemProps> = ({ item }) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const contentPreview = item.content.split(" ").slice(0, 50).join(" ");

  return (
    <Card maxW="sm" w="30%">
      <CardBody>
        <Box position="relative">
          <Badge
            colorScheme="green"
            position="absolute"
            top={0}
            right={0}
            zIndex={1}
            padding="10px 20px"
          >
            {item.price}
          </Badge>
          <Image
            src={item.imgSrc}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            height="350px"
            w="full"
          />
        </Box>

        <Stack mt="6" spacing="3">
          <Heading size="md">{item.name}</Heading>
          <Text>{showMore ? item.content : contentPreview}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Stack spacing="2">
          <h2 color="green" onClick={handleShowMore}>
            {showMore ? "Show less" : "Show more"}
          </h2>
          <Button
            variant="solid"
            colorScheme="white"
            color="green"
            borderColor="green"
          >
            Not interesting
          </Button>
        </Stack>
      </CardFooter>
    </Card>
  );
};

export default CardItem;
