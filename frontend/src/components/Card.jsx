import { Stack, Image, Input, Button, Box, useColorModeValue, Center } from '@chakra-ui/react';
import { useState } from 'react';

const Card = ({ img, message, checkoutHandler }) => {
  const [amount, setAmount] = useState('');

  return (
    <Stack
      maxW={{ base: 'full', sm: '80%', md: '445px' }}
      w={'full'}
      mx={{ base: 'auto', sm: 'auto', md: '10' }}
      mb={{ base: '4', md: '0' }} // Margin bottom to create space between cards and footer on smaller screens
      boxShadow={'lg'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}
      align="center"
      spacing={4}
    >
      <Box
        bg={useColorModeValue('white', 'gray.900')}
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        rounded={'md'}
        p={6}
        w="100%"
      >
        <Image src={img} h={{ base: '200px', md: '310px' }} w="100%" objectFit="cover" />
        <Input
        mt={5}
          border="1px solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          type="number"
          min="10"
          max="100"
          placeholder="Enter Amount for Donation"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          size="md"
          textAlign="center"
          placeholderTextColor={useColorModeValue('gray.400', 'gray.600')}
        />
        <Center>
          <Button colorScheme="green" mt={4} onClick={() => checkoutHandler(amount)}>
            Donate
          </Button>
        </Center>
      </Box>
    </Stack>
  );
};

export default Card;
