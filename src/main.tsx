import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import "./styles/App.css";

const queryClient = new QueryClient();
const system = createSystem(defaultConfig);// default settings of chakraui

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ChakraProvider value={system}> */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    {/* </ChakraProvider> */}
  </StrictMode>
);
