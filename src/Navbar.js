import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex justify="flex-start"color="white" mt={-4} mb={4}>
      <Heading as="h1" size="2xl">
        CodeX
      </Heading>
    </Flex>
  );
};

export default Navbar;