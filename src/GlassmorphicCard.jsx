import { Box, Text } from "@chakra-ui/react";

const GlassmorphicCard = () => {
  return (
    <Box
      bgGradient="linear(to-tr, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1))"
      borderRadius="xl"
      boxShadow="lg"
      p={8}
      w="300px"
      h="200px"
      backdropFilter="blur(20px)"
      position="relative"
    >
      {/* Content */}
      <Box
        bg="whiteAlpha.500"
        borderRadius="xl"
        p={4}
        position="relative"
        h="100%"
      >
        {/* Add your content here */}
        <Text fontSize="xl" fontWeight="bold">
          Glassmorphic Card
        </Text>
        <Text fontSize="md">Your content goes here</Text>
      </Box>

      {/* Frosty Texture */}
      <Box
        bgImage="url('path-to-your-noise-image.png')"
        bgSize="cover"
        bgPosition="center"
        bgBlendMode="overlay"
        opacity={0.2}
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
        pointerEvents="none"
      />
    </Box>
  );
};

export default GlassmorphicCard;
