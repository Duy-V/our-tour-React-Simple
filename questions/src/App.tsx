import { Box, Center } from "@chakra-ui/react";
import InputItem from "./InputItem";
const data = [
  {
    id: 1,
    question: "Do I Have To Allow The Use Of Cookies?",
    answer:
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    id: 2,
    question: "How Do I Change My My Page Password?",
    answer:
      "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 3,
    question: "What Is BankID?",
    answer:
      "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    id: 4,
    question: "When Do I Recieve A Password Ordered By Letter?",
    answer:
      "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    id: 5,
    question: "Whose Birth Number Can I Use?  ",
    answer:
      "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
];
export type DataType = (typeof data)[0];

function App() {
  return (
    <Box bg="white" margin="200px">
      <Center bg="white" h="100px">
        QUESTION
      </Center>
      {data.map((item, index) => (
          <InputItem key={index} item={item}  />
        ))}
    </Box>
  );
}

export default App;
