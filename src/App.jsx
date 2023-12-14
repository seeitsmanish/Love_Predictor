import "./App.css";
import { Flex, Image, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import GlassmorphicCard from "./GlassmorphicCard";
function App() {
  return (
    <>
      <Flex
        position="absolute"
        width="100vw"
        height="100vh"
        justify="center"
        align="center"
      >
        <Image src="./Love.png" height="100%"></Image>
      </Flex>
      <div
        className="todos-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GlassmorphicCard />
      </div>
    </>
  );
}

export default App;
