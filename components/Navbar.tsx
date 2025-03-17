"use client";

import {
  Box,
  Container,
  HStack,
  Text,
  Button,
  CloseButton,
  Drawer,
  Portal,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";
import "../app/globals.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Container maxW="100%" px={6} position="fixed" top={0} zIndex={50}>
      <HStack
        bgColor="gray.800"
        border="1px solid black"
        borderRadius="50px"
        padding={3}
        justify="space-between"
        align="center"
        boxShadow="lg"
        width={{ base: "95%", md: "90%" }}
        mx="auto"
        mt={4}
      >
        {/* Logo */}
        <Box flex={1}>
          <Text
            fontFamily="Audiowide, sans-serif"
            letterSpacing={3}
            color="red.500"
            fontSize="lg"
            fontWeight="bold"
            ml={5}
          >
            <Link href="/#land" scroll={true}>
              ADDIKT
            </Link>
          </Text>
        </Box>

        {/* Navigation Links for Desktop */}
        <HStack gap={6} mr={5} display={{ base: "none", md: "flex" }}>
          <NavText>
            <Link href={"/products"}>Products</Link>
          </NavText>
          <NavText>
            <Link href={"/about"}>About Us</Link>
          </NavText>
          <NavText
            color={"black"}
            bg="white"
            px={3}
            py={1}
            borderRadius="20px"
            transition="all 0.3s"
            _hover={{
              bg: "wheat",
              color: "gray",
              transform: "scale(1.05)",
            }}
          >
            <Link href={"/contact"}>Contact Us</Link>
          </NavText>
        </HStack>

        {/* Mobile Menu Button */}
        <Icon
          onClick={() => setOpen(true)}
          display={{ base: "block", md: "none" }}
          color={"white"}
          fontSize={"2xl"}
          cursor="pointer"
        >
          <FaBars />
        </Icon>
      </HStack>

      {/* Mobile Drawer */}
      <Portal>
        <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content bg="gray.900" color="white" borderRadius="20px">
              <Drawer.Header display="flex" justifyContent="center">
                <Text
                  fontFamily="Audiowide, sans-serif"
                  letterSpacing={3}
                  color="red.500"
                  fontSize="xl"
                  fontWeight="bold"
                >
                  ADDIKT
                </Text>
              </Drawer.Header>
              <Drawer.Body>
                <VStack gap={6} align="center" w="full">
                  <NavText
                    fontSize="lg"
                    fontWeight="bold"
                    py={2}
                    px={6}
                    borderRadius="10px"
                    _hover={{ bg: "red.600", color: "white" }}
                    onClick={() => setOpen(false)}
                  >
                    <Link href={"/products"}>Products</Link>
                  </NavText>
                  <NavText
                    fontSize="lg"
                    fontWeight="bold"
                    py={2}
                    px={6}
                    borderRadius="10px"
                    _hover={{ bg: "red.600", color: "white" }}
                    onClick={() => setOpen(false)}
                  >
                    <Link href={"/about"}>About Us</Link>
                  </NavText>
                  <NavText
                    fontSize="lg"
                    fontWeight="bold"
                    py={3}
                    px={8}
                    onClick={() => setOpen(false)}
                  >
                    <Link href={"/contact"}>Contact Us</Link>
                  </NavText>
                </VStack>
              </Drawer.Body>

              <Drawer.CloseTrigger asChild>
                <CloseButton
                  size="lg"
                  onClick={() => setOpen(false)}
                  position="absolute"
                  top={4}
                  right={4}
                  color={"white"}
                />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Drawer.Root>
      </Portal>
    </Container>
  );
}

// Reusable Styled Text Component
import { TextProps } from "@chakra-ui/react";
import Link from "next/link";

interface NavTextProps extends TextProps {
  children: React.ReactNode;
}

const NavText = ({ children, ...props }: NavTextProps) => (
  <Text
    color="white"
    fontSize="md"
    fontWeight="medium"
    cursor="pointer"
    transition="color 0.3s"
    _hover={{ color: "gray.400" }}
    {...props}
  >
    {children}
  </Text>
);

export default Navbar;
