"use client";

import {
  Box,
  Container,
  Text,
  VStack,
  Input,
  Textarea,
  Button,
  Fieldset,
} from "@chakra-ui/react";

import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Container maxW="container.md" py={"10%"} bg="black" color="white">
      <VStack gap={6} textAlign="center">
        <Text fontSize="lg" color="white">
          Have a question or need assistance? Reach out to us—we’d love to hear
          from you!
        </Text>
      </VStack>

      <Box display={"flex"} justifyContent={"center"}>
        <Box
          bg="gray.900"
          p={6}
          mt={8}
          borderRadius="md"
          shadow="md"
          width={"75%"}
        >
          <form onSubmit={handleSubmit}>
            <VStack gap={4}>
              <Fieldset.Root color="white">Name</Fieldset.Root>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                bg="black"
                color="white"
                borderColor="gray.700"
                _focus={{
                  borderColor: "goldenrod",
                  boxShadow: "0 0 5px goldenrod",
                }}
              />

              <Fieldset.Root color="white">Email</Fieldset.Root>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                bg="black"
                color="white"
                borderColor="gray.700"
                _focus={{
                  borderColor: "goldenrod",
                  boxShadow: "0 0 5px goldenrod",
                }}
              />

              <Fieldset.Root color="white">Message</Fieldset.Root>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows={5}
                bg="black"
                color="white"
                borderColor="gray.700"
                _focus={{
                  borderColor: "goldenrod",
                  boxShadow: "0 0 5px goldenrod",
                }}
              />

              <Button
                type="submit"
                colorScheme="purple"
                size="lg"
                width="full"
                bg="goldenrod"
                color="white"
              >
                Send Message
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactUs;
