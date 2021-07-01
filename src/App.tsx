import React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <DeleteIcon />
    </ChakraProvider>
  );
}

export default App;
