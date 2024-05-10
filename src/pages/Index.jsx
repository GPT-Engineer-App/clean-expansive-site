import { Box, Button, Container, Flex, Heading, IconButton, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const primaryColor = "#3182ce"; // Vibrant blue for accents
  const textColor = "#2D3748"; // Dark gray for readability

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minHeight="100vh">
        {/* Navigation Bar */}
        <Box as="nav" bg="white" py={4} px={8} shadow="sm">
          <Flex justify="space-between" align="center">
            <Heading size="md" color={primaryColor}>
              John Doe
            </Heading>
            <Stack direction="row" spacing={4}>
              <Link href="#about" fontWeight="bold">
                About
              </Link>
              <Link href="#projects" fontWeight="bold">
                Projects
              </Link>
              <Link href="#contact" fontWeight="bold">
                Contact
              </Link>
            </Stack>
          </Flex>
        </Box>

        {/* Hero Section */}
        <Flex align="center" justify="center" bg="white" py={20} px={8}>
          <VStack spacing={4}>
            <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1585076800246-4562eb6d6f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxqb2huJTIwZG9lJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE1MzQ2NzQ1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="John Doe" />
            <Heading size="xl" color={textColor}>
              John Doe
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Software Developer | Tech Enthusiast
            </Text>
            <Stack direction="row" spacing={4}>
              <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" bg={primaryColor} color="white" />
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" bg={primaryColor} color="white" />
              <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" bg={primaryColor} color="white" />
              <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" bg={primaryColor} color="white" />
            </Stack>
          </VStack>
        </Flex>

        {/* About Section */}
        <Box as="section" id="about" py={10} px={8} bg="gray.50">
          <VStack spacing={4} align="start">
            <Heading size="lg" color={textColor}>
              About Me
            </Heading>
            <Text fontSize="md" color="gray.700">
              I am a passionate software developer with a knack for building scalable web applications and engaging user experiences. With a background in computer science, I specialize in modern JavaScript frameworks and technologies.
            </Text>
          </VStack>
        </Box>

        {/* Projects Section */}
        <Box as="section" id="projects" py={10} px={8} bg="white">
          <VStack spacing={4} align="start">
            <Heading size="lg" color={textColor}>
              Projects
            </Heading>
            <Stack direction="row" spacing={4}>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">Project 1</Heading>
                <Text mt={4}>An innovative project that solves a common problem using advanced algorithms and user-friendly design.</Text>
              </Box>
              <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
                <Heading fontSize="xl">Project 2</Heading>
                <Text mt={4}>A mobile app that enhances daily productivity through intuitive design and powerful features.</Text>
              </Box>
            </Stack>
          </VStack>
        </Box>

        {/* Contact Section */}
        <Box as="section" id="contact" py={10} px={8} bg="gray.50">
          <VStack spacing={4} align="start">
            <Heading size="lg" color={textColor}>
              Contact Me
            </Heading>
            <Text fontSize="md" color="gray.700">
              Feel free to reach out for collaborations or just a friendly chat!
            </Text>
            <Button colorScheme="blue" bg={primaryColor} color="white">
              Send a Message
            </Button>
          </VStack>
        </Box>

        {/* Footer */}
        <Box as="footer" bg="white" py={4} px={8} mt="auto">
          <Text align="center" color="gray.600">
            © 2023 John Doe. All rights reserved.
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
