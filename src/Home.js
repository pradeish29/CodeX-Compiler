import React,  { useState } from 'react'
import { Box } from '@chakra-ui/react';
import { CodeEditor } from './CodeEditor';
import Navbar from './Navbar';

export const Home = () => {
  const editorRef = React.useRef();

    return (
      <div>
      <Box  minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8} >
        <Navbar/>
        <CodeEditor/>
      </Box>
      </div>
    );
}