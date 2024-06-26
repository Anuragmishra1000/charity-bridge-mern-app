// Navbar.js
import React from 'react';
import { Box, Flex, Text, Button, Stack, useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue('gray.100', 'gray.900');
    const color = useColorModeValue('gray.800', 'white');

    return (
        <Box bg={bgColor} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Box>
                    <Text fontSize="xl" fontWeight="bold" color='green.500'>
                        CHARITY BRIDGE
                    </Text>
                </Box>

                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>
                        <Button as="a" href="/" variant="link" color={color}>
                            Home
                        </Button>
                        <Button as="a" href="/about" variant="link" color={color}>
                            About
                        </Button>

                        <IconButton
                            size="md"
                            fontSize="lg"
                            aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
                            variant="ghost"
                            color={color}
                            onClick={toggleColorMode}
                            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        />
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    );
}

export default Navbar;
