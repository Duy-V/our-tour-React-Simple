import { useState } from "react";
import CardItem from "./CardItem";
import { Button, ButtonGroup, Flex, Card } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const data = [
  {
    id: 1,
    imgSrc: "../public/imgs/person-1.jpeg",
    name: "Bill Anderson",
    role: "Boss",
    reviews:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    imgSrc: "../public/imgs/person-2.jpeg",
    name: "Peter Jones    ",
    role: "Intern",
    reviews:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    imgSrc: "../public/imgs/person-3.jpeg",
    name: "Susan Smith",
    role: "Web developer",

    reviews:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    imgSrc: "../public/imgs/person-4.jpeg",
    name: "Anna Johnson    ",
    role: "Web designer",
    reviews:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },
];
export type DataType = (typeof data)[0];
function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      minH="100vh"
    >
      <Card w="50vw" py={5} justifyContent="center" alignItems="center">
        <CardItem item={data[currentIndex]} key={currentIndex} />
        <ButtonGroup>
          <Button onClick={handlePrev} m={4}>
            <ChevronLeftIcon />
          </Button>
          <Button onClick={handleNext} m={4}>
            <ChevronRightIcon />
          </Button>
        </ButtonGroup>
        <Button onClick={handleNext} m={4}>
          Subscribe me{" "}
        </Button>
      </Card>
    </Flex>
  );
}

export default App;
