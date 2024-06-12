import { Container, Box, VStack, Heading, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10} align="stretch">
        {/* Hero Section */}
        <Box textAlign="center" py={10} bg="gray.100" borderRadius="md">
          <Heading as="h1" size="2xl" mb={4}>Rebuilding Libya</Heading>
          <Text fontSize="xl">Join us in our mission to reconstruct and develop Libya for a better future.</Text>
        </Box>

        {/* About Us Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>About Us</Heading>
          <Text fontSize="lg">
            We are an organization dedicated to the reconstruction and development of Libya. Our team is composed of experts from various fields who are committed to making a positive impact.
          </Text>
        </Box>

        {/* Mission Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>Our Mission</Heading>
          <Text fontSize="lg">
            Our mission is to support the rebuilding of Libya by providing resources, expertise, and collaboration with local and international partners. We aim to create sustainable development projects that will benefit the Libyan people for generations to come.
          </Text>
        </Box>

        {/* Projects Section */}
        <Box>
          <Heading as="h2" size="xl" mb={4}>Our Projects</Heading>
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
              <Text fontSize="lg" mb={2}>Email: info@rebuildinglibya.org</Text>
              <Text fontSize="lg" mb={2}>Phone: +123 456 7890</Text>
              <Text fontSize="lg">Address: 123 Reconstruction St, Copenhagen, Denmark</Text>
            </GridItem>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;