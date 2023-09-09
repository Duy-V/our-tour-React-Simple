import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { DataType } from "./App";
type InputItemProps = {
  item: DataType;
  onRemove: (id: number) => void;
};
const InputItem: React.FC<InputItemProps> = ({ item }) => {
  return (
    <div>
      <Accordion allowMultiple bg="white">
        <AccordionItem paddingBottom="50px">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    {item.question}
                  </Box>
                  {isExpanded ? (
                    <MinusIcon
                      fontSize="30px"
                      bg="blue.200"
                      borderRadius="50%"
                      color="white"
                      padding="5px"
                    />
                  ) : (
                    <AddIcon
                      fontSize="30px"
                      bg="blue.200"
                      color="white"
                      borderRadius="50%"
                      padding="5px"
                    />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default InputItem;
