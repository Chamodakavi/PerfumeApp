"use client";

import { Box, Container, Heading, Text, VStack, Icon } from "@chakra-ui/react";
import { FaLeaf, FaFlask, FaHeart } from "react-icons/fa";

const AboutUs = () => {
  return (
    <Container maxW="container.lg" py={100}>
      <VStack gap={6} textAlign="center">
        <Heading as="h1" size="3xl" color="goldenrod" fontWeight={"bold"}>
          About Us
        </Heading>
        <Text fontSize="lg" color="white" maxW="700px">
          Welcome to{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>ADDIKT</span>,
          where luxury, elegance, and artistry come together to create the
          perfect fragrance experience. We believe that perfume is more than
          just a scent—it’s a reflection of personality, emotion, and
          unforgettable memories.
        </Text>
        <Text fontSize="lg" color="white" maxW="800px">
          Our Eau de Parfum (EDP) is a true testament to luxury and longevity,
          crafted with an exceptional 30% concentration of pure essential oils.
          This means every spritz is rich, potent, and exquisitely refined,
          offering a scent that is both captivating and enduring. With fewer
          synthetic additives, our perfumes deliver a pure olfactory
          experience—just the essence of elegance. A single spray is enough to
          leave a lasting impression, enveloping you in an alluring aura that
          lingers throughout the day. When applied to fabric, the fragrance
          remains beautifully intact until your next wash, making every wear a
          statement of sophistication and charm.
        </Text>
      </VStack>

      <VStack gap={8} mt={10} align="stretch">
        {/* <Box bg="gray.500" p={6} borderRadius="md" shadow="md">
          <Heading as="h2" size="md" color="purple" mb={2}>
            Our Mission
          </Heading>
          <Text color="white">
            We are committed to redefining the world of fragrance by offering
            meticulously crafted perfumes made from the finest natural and
            sustainable ingredients.
          </Text>
        </Box> */}

        <VStack gap={6}>
          <Heading as="h2" size="3xl" color="goldenrod" fontWeight={"bold"}>
            What Makes Us Unique?
          </Heading>
          <VStack gap={4} align="stretch">
            <Box
              display="flex"
              alignItems="center"
              bg="grey"
              p={4}
              borderRadius="md"
              shadow="sm"
            >
              <Icon as={FaFlask} boxSize={6} color="purple" mr={3} />
              <Text fontSize="md" color="white">
                Artisanal Craftsmanship: Expertly composed fragrances ensuring a
                perfect balance.
              </Text>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              bg="grey"
              p={4}
              borderRadius="md"
              shadow="sm"
            >
              <Icon as={FaLeaf} boxSize={6} color="green.500" mr={3} />
              <Text fontSize="md" color="white">
                Premium Ingredients:Sourced from rare flowers, rich woods, and
                exotic spices.
              </Text>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              bg="grey"
              p={4}
              borderRadius="md"
              shadow="sm"
            >
              <Icon as={FaHeart} boxSize={6} color="red.500" mr={3} />
              <Text fontSize="md" color="white">
                Sustainability & Ethics: Cruelty-free, eco-friendly, and
                responsibly crafted.
              </Text>
            </Box>
          </VStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default AboutUs;
