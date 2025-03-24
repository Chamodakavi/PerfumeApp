"use client";

import { HStack, Box, Text, VStack, Button, Container } from "@chakra-ui/react";
import Image from "next/image";
import Perfume from "../images/OIP.png"; // Ensure image path is correct
import AdvancedPerfumeTechnologies from "./AdvanceTechnologies";
import TimeLine from "./TimeLine";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionImage = motion(Image);

const MotionButton = motion(Button);
function LandingSection() {
  return (
    <section>
      <section id="land">
        <HStack
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          width="100%"
          bg="black"
          position="relative"
          px={{ base: 5, md: 10 }}
          overflow="hidden"
        >
          {/* Left Section - Text */}
          <MotionBox
            as={VStack}
            alignItems="start"
            color="goldenrod"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <MotionText
              fontFamily="luckiest"
              fontSize={{ base: "30px", md: "50px", lg: "60px" }}
              textShadow="2px 2px 10px rgba(255, 215, 0, 0.7)"
              lineHeight="1.2"
              letterSpacing={3}
            >
              Sri Lanka's No.1 <br /> Perfume Brand <br />
              <span
                style={{
                  fontFamily: "audiowide",
                  letterSpacing: 10,
                  color: "red",
                }}
              >
                ADDIKT
              </span>
            </MotionText>
          </MotionBox>

          {/* Glowing Light */}
          <Box
            position="absolute"
            width="300px"
            height="300px"
            borderRadius="50%"
            bg="rgba(255, 215, 0, 0.3)"
            filter="blur(90px)"
            zIndex={1}
          />

          {/* Right Section - Perfume Bottle */}
          <MotionBox
            position="relative"
            zIndex={2}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <MotionImage
              src={Perfume}
              alt="perfume"
              width={350}
              height={450}
              style={{
                filter: "drop-shadow(0px 0px 30px rgba(255, 215, 0, 0.9))",
              }}
            />
          </MotionBox>

          {/* Water Reflection Effect */}
          <Box
            position="absolute"
            bottom="10%"
            width="50%"
            height="40px"
            bg="rgba(255, 255, 255, 0.1)"
            borderRadius="50%"
            filter="blur(12px)"
            animation="ripple 4s infinite ease-in-out"
          ></Box>

          {/* Keyframes for Floating & Ripple Effects */}
          <style jsx>{`
            @keyframes ripple {
              0% {
                transform: scaleX(1);
              }
              50% {
                transform: scaleX(1.1);
              }
              100% {
                transform: scaleX(1);
              }
            }
          `}</style>
        </HStack>
      </section>
      <section id="Advanced Perfume Technologies">
        <AdvancedPerfumeTechnologies />
      </section>
      <section id="timeline">
        {/* <Box bg={"black"} color={"white"} pt={20}>
          <Text fontSize={"3xl"} fontWeight={"bold"} textAlign={"center"}>
            The Legacy of Perfumes – A Timeless Journey Through Scent
          </Text>

        </Box> */}
        <TimeLine />
      </section>
      <section id="contact">
        <Container bg={"black"}>
          <Box
            bg={"black"}
            color={"white"}
            py={20}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Text fontSize="3xl" fontWeight="bold" textAlign={"center"}>
              Discover Your Perfect Scent <br />" Let's Begin Your Fragrance
              Journey!"
            </Text>
            <Box display={"flex"} justifyContent={"center"} py={20}>
              <MotionButton
                fontSize={"2xl"}
                bg={"#EF4444"}
                color="white"
                width={250}
                borderRadius="md"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#DC2626",
                  boxShadow: "0px 4px 15px rgba(239, 68, 68, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <Link href="/contact">Contact Us</Link>
              </MotionButton>
            </Box>
          </Box>
        </Container>
      </section>
    </section>
  );
}

export default LandingSection;
