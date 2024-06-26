import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Intro({ img }) {
  return (
    <Center py={6}>
      <Box
        maxW={{ base: 'full', sm: '80%', md: '445px' }}
        w={'full'}
        mx={{ base: '2', sm: 'auto', md: '10' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'lg'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}
      >
        <Box
          h={{ base: '200px', md: '310px' }}
          pos={'relative'}
          overflow={'hidden'}
          rounded={'md'}
        >
          <Image
            src={img}
            alt="Intro Image"
            objectFit="cover"
            w="100%"
            h="100%"
          />
        </Box>
        <Stack spacing={4} mt={4}>
          <Text
            color={'green.400'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'lg'}
            letterSpacing={1.1}
          >
            Donation Campaign
          </Text>
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={{ base: 'xl', md: '2xl' }}
            fontFamily={'body'}
          >
            Give. Empower. Transform
          </Heading>
          <Text color={'gray.500'}>
            Transform lives through education. Your donation empowers children, fuels dreams, and paves the way for a brighter future. Join us in making a lasting impact today
          </Text>
        </Stack>
      </Box>
    </Center>
  );
}
