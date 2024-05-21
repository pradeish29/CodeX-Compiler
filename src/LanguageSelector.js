import React from 'react'
import {Box, Button, Menu, MenuButton,MenuItem,MenuList, Text} from '@chakra-ui/react'
import { LANGUAGE_VERSIONS } from './Constant'
import { color } from 'framer-motion'

const languages = Object.entries(LANGUAGE_VERSIONS)

 const LanguageSelector = ({language, onSelect}) => {
  return (
    <Box ml={2} mb={4}>
    <Menu >
    <MenuButton colorScheme='teal' variant='outline' as={Button}>{language}</MenuButton>
    <MenuList bg="#110c1b" border="none">
      {languages.map(([lang,version])=>(
        <MenuItem key={lang} 
        color={ lang === language ? "blue.400":""}
        bg={ lang===language? "gray.900":""} 
        _hover={{color:"blue.400", bg:"gray.900"}}
        onClick={()=> onSelect(lang)}>
        {lang}
        &nbsp;
        <Text as='span' color="gray.600" fontSize="sm">{version}</Text>
        </MenuItem>
      ))
      }
    </MenuList>
  </Menu>
  </Box>
  )
}
export default LanguageSelector;
