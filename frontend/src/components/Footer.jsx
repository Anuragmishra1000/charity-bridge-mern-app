// Footer.js
import React from 'react';
import { Box, Container, Stack, Text, Link, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaTwitter,FaGithub, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  return (
    <Box bg={bgColor} color={textColor} py={10}>
      <Container as={Stack} maxW={'6xl'} spacing={4}>
        <Stack direction={'row'} spacing={6} justify={'center'}>
          <Link href={'/'}>Home</Link>
          <Link href={'/about'}>About Us</Link>
        
        </Stack>
        <Stack direction={'row'} spacing={6} justify={'center'}>
          
          <Link href="https://www.linkedin.com/in/anuragmishra1024" isExternal>
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            bg={useColorModeValue('white', 'gray.700')}
            _hover={{ bg: useColorModeValue('gray.200', 'gray.600') }}
            />
            </Link>
          <Link href="https://github.com/Anuragmishra1000" isExternal>
          <IconButton
            aria-label="Github"
            icon={<FaGithub />}
            bg={useColorModeValue('white', 'gray.700')}
            _hover={{ bg: useColorModeValue('gray.200', 'gray.600') }}
            />
            </Link>
        </Stack>
        <Text textAlign={'center'}>© 2024 COD-PHY. All rights reserved.</Text>
      </Container>
    </Box>
  );
};

export default Footer;
