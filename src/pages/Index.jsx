import { Container, Box, VStack, Heading, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input, Textarea, Button, Flex, Icon } from "@chakra-ui/react";
import { FaHandsHelping, FaBullseye, FaProjectDiagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10} align="stretch">
        {/* Hero Section */}
        <Box
          textAlign="center"
          py={20}
          bgImage="url('/images/background-image.jpg')"
          bgSize="cover"
          bgPosition="center"
          borderRadius="md"
          color="white"
          position="relative"
        >
          <Box position="absolute" top="0" left="0" right="0" bottom="0" bg="blackAlpha.600" borderRadius="md" />
          <Box position="relative">
            <Heading as="h1" size="2xl" mb={4}>Rebuilding Libya</Heading>
            <Text fontSize="xl">Join us in our mission to reconstruct and develop Libya for a better future.</Text>
          </Box>
        </Box>

        {/* About Us Section */}
        <Box>
          <Flex align="center" mb={4}>
            <Icon as={FaHandsHelping} w={8} h={8} color="blue.500" mr={2} />
            <Heading as="h2" size="xl">About Us</Heading>
          </Flex>
          <Text fontSize="lg">
            We are an organization dedicated to the reconstruction and development of Libya. Our team is composed of experts from various fields who are committed to making a positive impact.
          </Text>
        </Box>

        {/* Mission Section */}
        <Box>
          <Flex align="center" mb={4}>
            <Icon as={FaBullseye} w={8} h={8} color="blue.500" mr={2} />
            <Heading as="h2" size="xl">Our Mission</Heading>
          </Flex>
          <Text fontSize="lg">
            Our mission is to support the rebuilding of Libya by providing resources, expertise, and collaboration with local and international partners. We aim to create sustainable development projects that will benefit the Libyan people for generations to come.
          </Text>
        </Box>

        {/* Projects Section */}
        <Box>
          <Flex align="center" mb={4}>
            <Icon as={FaProjectDiagram} w={8} h={8} color="blue.500" mr={2} />
            <Heading as="h2" size="xl">Our Projects</Heading>
          </Flex>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box bg="gray.50" p={5} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="lg" mb={2}>Project 1</Heading>
              <Text>
                Description of the first project. This project focuses on infrastructure development and improving public services.
              </Text>
            </Box>
            <Box bg="gray.50" p={5} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="lg" mb={2}>Project 2</Heading>
              <Text>
                Description of the second project. This project aims to enhance educational facilities and provide better learning opportunities.
              </Text>
            </Box>
            {/* Add more projects as needed */}
          </SimpleGrid>
        </Box>

        {/* Contact Information Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>Contact Us</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <GridItem>
              <FormControl id="name" mb={4}>
                <FormLabel>Name</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="email" mb={4}>
                <FormLabel>Email</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="message" mb={4}>
                <FormLabel>Message</FormLabel>
                <Textarea />
              </FormControl>
              <Button colorScheme="blue" mt={4}>Send Message</Button>
            </GridItem>
            <GridItem>
              <Flex align="center" mb={2}>
                <Icon as={FaEnvelope} w={6} h={6} color="blue.500" mr={2} />
                <Text fontSize="lg">info@rebuildinglibya.org</Text>
              </Flex>
              <Flex align="center" mb={2}>
                <Icon as={FaPhone} w={6} h={6} color="blue.500" mr={2} />
                <Text fontSize="lg">+123 456 7890</Text>
              </Flex>
              <Flex align="center">
                <Icon as={FaMapMarkerAlt} w={6} h={6} color="blue.500" mr={2} />
                <Text fontSize="lg">123 Reconstruction St, Copenhagen, Denmark</Text>
              </Flex>
            </GridItem>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;