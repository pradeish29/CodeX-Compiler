import axios from "axios";
import { LANGUAGE_VERSIONS } from "./Constant";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode, userInput) => {
  const response = await API.post("/execute", {
    language: language,
    version: LANGUAGE_VERSIONS[language],
    files: [
      {
        content: sourceCode,
      },
    ],
    stdin: userInput,
  });
  console.log(response.data)
  return response.data;
 
}; 