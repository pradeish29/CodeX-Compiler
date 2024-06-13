# CodeX-Compiler

## Overview
CodeX-Compiler is an online code compiler built using React and Chakra UI. It leverages Piston API to execute code in various programming languages. The application provides a simple and user-friendly interface for writing, running, and testing code snippets online.

Live Demo - https://pradeish29.github.io/CodeX-Compiler/

## Features
- Supports multiple programming languages including JavaScript, TypeScript, Python, Java, C#, C, C++, and PHP.
- User-friendly code editor with syntax highlighting powered by Monaco Editor.
- Responsive design, adapting to different screen sizes using Chakra UI.
- Real-time code execution and output display using Piston API.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Chakra UI**: Simple, modular, and accessible component library for React.
- **Monaco Editor**: Code editor that powers VS Code, integrated into the application for a robust coding experience.
- **Piston API**: API for executing code in multiple programming languages.

## Deployment
The app is deployed on GitHub Pages and can be accessed at:
[CodeX-Compiler](https://pradeish29.github.io/CodeX-Compiler/)

## Getting Started
To get a local copy up and running, follow these simple steps:

### Prerequisites
- Node.js installed on your local machine.

### Installation
1. Clone the repository:
```sh
git clone https://github.com/pradeish29/CodeX-Compiler.git
```
2. Navigate to the project directory:

```sh
cd CodeX-Compiler
```
3. Install the dependencies:

```sh
npm install
```
4. Install Chakra UI, Axios, and React Router DOM:

```sh
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion axios react-router-dom
```
5. Start the development server:

```sh
npm start
```
## Usage
Open the application in your browser:
```sh
http://localhost:3000
```
- Select a programming language from the dropdown menu.
- Write your code in the editor.
- Provide any necessary input for the code in the input section.
- Click the "Run Code" button to execute the code and view the output.

## File Structure
- src/: Contains the source code of the application.
= components/: Contains the React components used in the app.
- CodeEditor.js: Main code editor component.
- LanguageSelector.js: Component for selecting programming languages.
- Output.js: Component for displaying code execution output.
- App.js: Main application component.
- index.js: Entry point of the application.
  
## Modifications
There is a small modification in the index.html file to address an issue with the webpack development server overlay:

```html
<style>
    iframe#webpack-dev-server-client-overlay{display:none!important}
</style>
```
This was done to handle the following error:

```vbnet
ERROR
ResizeObserver loop completed with undelivered notifications.
    at handleError
```
Feel free to fork and contribute to rectifying this issue.

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
Feel free to fork and contributing to rectify the issue

## Fork the Project.
- Create your Feature Branch (git checkout -b feature/AmazingFeature).
- Commit your Changes (git commit -m 'Add some AmazingFeature').
- Push to the Branch (git push origin feature/AmazingFeature).
- Open a Pull Request.

## License
Distributed under the MIT License. See LICENSE for more information.
