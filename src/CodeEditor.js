import { useRef, useState } from "react";
import { Box, HStack, VStack, Flex, useMediaQuery } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "./Constant";
import Output from "./Output";

export const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [isSmallerScreen] = useMediaQuery("(max-width: 700px)");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box p={4}>
      {isSmallerScreen ? (
        <VStack spacing={5} align="stretch">
          <Box w="100%">
            <Flex justify="flex-end" mt={-4}>
              <LanguageSelector language={language} onSelect={onSelect} />
            </Flex>
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              height="60vh" // Adjusted height for better mobile view
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </Box>
          <Box w="100%">
            <Output editorRef={editorRef} language={language} />
          </Box>
        </VStack>
      ) : (
        <HStack spacing={5} align="start">
          <Box w="55%">
            <Flex justify="flex-end" mt={-4}>

              <LanguageSelector language={language} onSelect={onSelect} />
            </Flex>
            <Editor
              options={{
                minimap: {
                  enabled: true,
                },
              }}
              height="75vh"
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </Box>
          <Box w="45%">
            <Output editorRef={editorRef} language={language} />
          </Box>
        </HStack>
      )}
    </Box>
  );
};
