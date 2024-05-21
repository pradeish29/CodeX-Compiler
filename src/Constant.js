
export const LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0",
    c:"10.2.0",
    cpp:"10.2.0",
    php: "8.2.3",
  };
  
  export const CODE_SNIPPETS = {
    javascript: `/* This is a simple Javascript program to print "Hello World" */\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("Alex");\n`,
    typescript: `/* This is a simple typescript program to print "Hello World" */\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "Alex" });\n`,
    python: `/* This is a simple Python program to print "Hello World" */\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
    java: `// This is a simple Java program to print "Hello World"// \npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
    csharp:`/* This is a simple C# program to print "Hello World" */\nusing System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World in C#");\n\t\t}\n\t}\n}\n`,
    c: `/* This is a simple C program to print "Hello World" */\n#include <stdio.h>\n\nint main() {\n\tprintf("Hello World\\n");\n\treturn 0;\n}\n`,
    cpp:`/* This is a simple C++ program to print "Hello World" */\n#include <iostream>\n\nint main() {\n\tstd::cout << "Hello World" << std::endl;\n\treturn 0;\n}\n`,
    php: `/* This is a simple php program to print "Hello World" */\n <?php\n\n$name = 'Alex';\necho $name;\n?>`,
  };
  