import React, { useState } from 'react'
import{Box, Button, Text, useToast,Textarea, VStack} from '@chakra-ui/react'
import { executeCode } from './Api'

const Output = ({editorRef, language}) => {
    const toast = useToast();
    const[output, setOutput] = useState(null)
    const[isLoad, setIsLoad] = useState(false)
    const[isError, setIsError]= useState(false)
    const [userInput, setUserInput] = useState(""); 

    const runCode = async()=>{
        const sourceCode = editorRef.current.getValue()
        if(!sourceCode) return;
        try {
            setIsLoad(true)
            const {run: result} = await executeCode(language, sourceCode, userInput)
            setOutput(result.output.split("\n"))
            result.stderr? setIsError(true):setIsError(false)

        } catch (error) {   
            console.log(error)
            toast({
                title: 'Error',
                description: error.message || "unable to run",
                status: 'error',
                duration: 5000,
            })
        } finally{
            setIsLoad(false)
        }
    }

  return (
    <Box >
        <VStack spacing={5}></VStack>
        <Text mb={2} fontSize='lg' >User Input</Text>
         <Textarea minHeight='20vh' borderColor="#333"
                placeholder="Enter input for your code here..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                mb={4}
            />  
        <Text mb={2} fontSize='lg' >Output</Text>
        <Button variant="outline" colorScheme='green' mb={4} isLoading={isLoad} onClick={runCode}> Run Code</Button>
    
        <Box minHeight='40vh' border= "1px solid" borderRadius={4} color={isError?"red.500":""} borderColor="#333">
           <Text ml={3} mt={3}>{output? output.map(
            (line, i)=> <Text key={i}>{line}</Text>
           ): 'Click on "Run Code" to see Output'}</Text> 
        </Box> 
    </Box>
  )
}
export default Output;  
