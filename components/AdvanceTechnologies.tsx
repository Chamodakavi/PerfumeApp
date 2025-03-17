import { Box, SimpleGrid, Text, VStack, Icon } from "@chakra-ui/react";
import {
  FaAtom,
  FaLeaf,
  FaRobot,
  FaLightbulb,
  FaMagic,
  FaFlask,
} from "react-icons/fa";
import { motion } from "framer-motion";

const MotionVStack = motion(VStack);

const perfumeTech = [
  {
    title: "Smart & Long-Lasting Scents",
    icon: FaAtom,
    description:
      "Encapsulation technology and time-release formulas ensure all-day freshness.",
  },
  {
    title: "AI-Generated Custom Scents",
    icon: FaRobot,
    description:
      "AI analyzes your preferences to create a unique, personalized fragrance.",
  },
  {
    title: "Sustainable & Eco-Friendly",
    icon: FaLeaf,
    description:
      "Biodegradable packaging, water-based perfumes, and lab-grown ingredients.",
  },
  {
    title: "Mood-Adaptive Fragrances",
    icon: FaMagic,
    description:
      "Perfumes that adjust their scent based on your emotions and body chemistry.",
  },
  {
    title: "Wearable Perfume Tech",
    icon: FaLightbulb,
    description:
      "Smart jewelry and wristbands that diffuse fragrance throughout the day.",
  },
  {
    title: "Odor-Neutralizing Sprays",
    icon: FaFlask,
    description:
      "Molecular technology that blocks unpleasant odors while releasing fresh scents.",
  },
];

function AdvancedPerfumeTechnologies() {
  return (
    <Box p={10} bg="black" color="white" textAlign="center">
      <Text fontSize="3xl" fontWeight="bold" mb={5}>
        Advanced Perfume Technologies
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
        {perfumeTech.map((tech, index) => (
          <MotionVStack
            key={index}
            p={6}
            bg="gray.800"
            borderRadius="lg"
            boxShadow="lg"
            // transition="0.3s"
            _hover={{ transform: "scale(1.05)", bg: "gray.700" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
          >
            <Icon as={tech.icon} boxSize={10} color="gold" />
            <Text fontSize="xl" fontWeight="bold">
              {tech.title}
            </Text>
            <Text fontSize="sm" color="gray.300">
              {tech.description}
            </Text>
          </MotionVStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default AdvancedPerfumeTechnologies;
