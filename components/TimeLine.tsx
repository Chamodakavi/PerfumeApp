"use client";
import { Box, VStack, Text, Icon, HStack } from "@chakra-ui/react";
import { FaLeaf, FaCrown, FaFlask, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

// Motion Wrapper
const MotionBox = motion(Box);

// Custom Vertical Divider Component
const VerticalDivider = ({
  height = "50px",
  width = "3px",
  color = "goldenrod",
}) => {
  return (
    <Box
      width={width}
      height={height}
      backgroundColor={color}
      borderRadius="full"
    />
  );
};

const timelineData = [
  {
    year: "3000 BC",
    title: "Ancient Origins – The Birth of Fragrance",
    description:
      "Perfume dates back over 5,000 years, with early civilizations like Egypt, Mesopotamia, and India using natural oils and resins for rituals and royalty.",
    icon: FaLeaf,
  },
  {
    year: "17th Century",
    title: "The Golden Age of Perfumery",
    description:
      "During the Renaissance, France and Italy became the perfume capitals of the world. King Louis XIV’s court was famously scented.",
    icon: FaCrown,
  },
  {
    year: "20th Century",
    title: "The Rise of Modern Perfumes",
    description:
      "The perfume industry saw revolutionary changes with synthetic ingredients, making fragrances last longer and become more accessible.",
    icon: FaFlask,
  },
  {
    year: "Present & Future",
    title: "Sustainable & Smart Perfumes",
    description:
      "AI-generated scents, eco-friendly formulas, and personalized perfumes are shaping the future of fragrance.",
    icon: FaRocket,
  },
];

function PerfumeTimeline() {
  return (
    <VStack gap={8} position="relative" p={10} align="center" bg={"black"}>
      <Text fontSize="3xl" fontWeight="bold" mb={5} color={"white"}>
        The Legacy of Perfume
      </Text>

      {timelineData.map((item, index) => (
        <MotionBox
          key={index}
          as={HStack}
          alignItems="start"
          gap={5}
          position="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }} // Ensures animation happens only once
        >
          {/* Timeline Line */}
          <VStack align="center">
            <Box
              p={3}
              bg="goldenrod"
              borderRadius="50%"
              boxShadow="lg"
              transition="0.3s"
              _hover={{ transform: "scale(1.2)", bg: "orange.300" }}
            >
              <Icon as={item.icon} boxSize={6} color="white" />
            </Box>
            {/* Custom Vertical Line */}
            {index !== timelineData.length - 1 && (
              <VerticalDivider height="80px" />
            )}
          </VStack>

          {/* Content */}
          <Box
            bg="gray.800"
            color="white"
            p={5}
            borderRadius="md"
            boxShadow="lg"
            maxW="500px"
          >
            <Text fontSize="lg" fontWeight="bold" color="goldenrod">
              {item.year}
            </Text>
            <Text fontSize="xl" fontWeight="bold">
              {item.title}
            </Text>
            <Text fontSize="sm" color="gray.300">
              {item.description}
            </Text>
          </Box>
        </MotionBox>
      ))}
    </VStack>
  );
}

export default PerfumeTimeline;
