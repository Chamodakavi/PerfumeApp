"use client";

import { Box, Text, Icon } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion

import Bottle from "../images/bottle.png";
import { FcNext, FcPrevious } from "react-icons/fc";

const products = [
  {
    id: 1,
    name: "Agarwood",
    price: "$100",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 2,
    name: "Vanilla",
    price: "$120",
    image: "https://via.placeholder.com/200",
  },
  {
    id: 3,
    name: "Musk",
    price: "$90",
    image: "https://via.placeholder.com/200",
  },
];

function ShoeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flip, setFlip] = useState(0); // Track flip animation
  const [isFlipping, setIsFlipping] = useState(false); // Track animation state

  const changeProduct = (direction: "next" | "prev") => {
    if (isFlipping) return; // Prevent multiple clicks during animation

    setIsFlipping(true); // Set flipping state

    // First flip (180°)
    setFlip(180);

    setTimeout(() => {
      // Change product in the middle of flip
      setCurrentIndex((prevIndex) => {
        if (direction === "next") {
          return (prevIndex + 1) % products.length;
        } else {
          return (prevIndex - 1 + products.length) % products.length;
        }
      });

      // Flip back to 0° (reset)
      setFlip(0);

      setTimeout(() => {
        setIsFlipping(false); // Allow next flip
      }, 600); // Delay reset to match animation timing
    }, 600); // Wait half the animation before changing product
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="black"
      color="white"
      p={5}
      borderRadius={10}
      position="relative"
      // top={"50px"}
      // height={"100vh"}
      pt={55}
    >
      {/* Background Blur Effect */}
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          position="absolute"
          width="300px"
          height="300px"
          borderRadius="50%"
          bg="rgba(247, 0, 0, 0.48)"
          filter="blur(90px)"
          zIndex={1}
          top={40}
        />
      </Box>

      <Box
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={5}
        // width="100%"
      >
        {/* Previous Button */}
        <Icon
          position={"relative"}
          top={0}
          as={FcPrevious}
          onClick={() => changeProduct("prev")}
          fontSize={"2xl"}
          cursor="pointer"
          _hover={{ transform: "scale(1.2)" }}
          zIndex={99}
        />

        {/* Product Display */}
        <Box
          textAlign="center"
          mx={6}
          display="flex"
          flexDirection="column"
          alignItems="center"
          position="relative"
          zIndex={2}
        >
          {/* Bottle Image with Flip Animation */}
          {/* Bottle Image with Initial Load & Flip Animation */}
          <motion.div
            initial={{ opacity: 0, y: 100 }} // Start hidden & below
            animate={{ opacity: 1, y: 0 }} // Move up on load
            transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
          >
            <motion.div
              animate={{ rotateY: flip }} // Flip in and flip out
              transition={{ duration: 0.6, ease: "easeInOut" }} // Smooth flip effect
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              <Box width={"90px"} height={"200px"} mt={2}>
                <Image
                  src={Bottle}
                  alt="bottle"
                  width={"100"}
                  height={"200"}
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </motion.div>
          </motion.div>

          {/* Product Name & Price */}
          <Box mt={150}>
            <Text fontSize="lg" mt={3}>
              {products[currentIndex].name}
            </Text>
            <Text fontSize="xl" fontWeight="bold">
              {products[currentIndex].price}
            </Text>
          </Box>

          {/* Buttons */}
          <Box
            mt={3}
            position={"relative"}
            top={0}
            display="flex"
            flexDirection={{ base: "column", md: "row" }} // Stack on mobile, row on larger screens
            gap={2} // Adds spacing between buttons
            width="100%" // Ensures full width in mobile view
          >
            <StyleButton mr={2}>Add to Cart</StyleButton>
            <StyleButton colorScheme="red">Buy</StyleButton>
          </Box>
        </Box>

        {/* Next Button */}
        <Icon
          position={"relative"}
          top={0}
          as={FcNext}
          onClick={() => changeProduct("next")}
          fontSize={"2xl"}
          cursor="pointer"
          _hover={{ transform: "scale(1.2)" }}
          zIndex={99}
        />
      </Box>
    </Box>
  );
}

// Custom Button Component
import { TextProps } from "@chakra-ui/react";

interface BtnProps extends TextProps {
  children: React.ReactNode;
}

const StyleButton = ({ children, ...props }: BtnProps) => (
  <Text
    color="gray"
    bg={"white"}
    p={2}
    borderRadius={20}
    fontSize="md"
    fontWeight="medium"
    cursor="pointer"
    transition="color 0.3s"
    _hover={{
      color: "white",
      bgColor: "red",
    }}
    {...props}
  >
    {children}
  </Text>
);

export default ShoeCarousel;
