import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons"; // Import the PhoneIcon component

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <App />
      <IconButton
        colorScheme="teal"
        aria-label="Call Segun"
        size="lg"
        icon={<PhoneIcon />}
      />
    </ChakraProvider>
  </StrictMode>
);
