// About.js
import React from 'react';
import { Box, Heading, Text, Stack, Image, Button, VStack, useColorModeValue, Center, Divider } from '@chakra-ui/react';

const About = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const buttonBgColor = useColorModeValue('teal.500', 'teal.300');
  const buttonTextColor = useColorModeValue('white', 'gray.800');

  return (
    <Box bg={bgColor} p={8} borderRadius="lg" boxShadow="lg" maxW="800px" mx="auto" my={10}>
      <VStack spacing={6} align="center">
        <Heading as="h1" size="xl" color={textColor}>
          About Us
        </Heading>
        <Divider borderColor={textColor} />
        <Center>
          <Image
            src="../../donatenow.jpeg"
            alt="About Us"
            borderRadius="md"
            boxShadow="md"
          />
        </Center>
        <Text fontSize="lg" color={textColor} textAlign="center">
          Welcome to our donation platform! We are dedicated to making the world a better place by supporting various
          causes and helping those in need. Our mission is to connect generous donors with impactful projects and
          initiatives.
        </Text>
        <Text fontSize="lg" color={textColor} textAlign="center">
          Our platform allows you to make secure and easy donations to a wide range of causes, from education and
          healthcare to environmental conservation and disaster relief. We believe that every contribution, no matter how
          small, can make a significant difference.
        </Text>
        <Text fontSize="lg" color={textColor} textAlign="center">
          Join us in our mission to create positive change. Your support is invaluable, and together, we can make a
          lasting impact.
        </Text>
        <Stack direction="row" spacing={4} mt={4} justify="center">
       
        </Stack>
      </VStack>
    </Box>
  );
};

export default About;
