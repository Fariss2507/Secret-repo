import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const dummyData = {
  algorithm: "An algorithm is a set of instructions designed to perform a specific task. Example: Sorting a list.",
  react: "React is a JavaScript library for building user interfaces. Example: Used in single-page applications.",
  database: "A database is a structured collection of data. Example: MySQL, MongoDB.",
  api: "An API (Application Programming Interface) allows communication between software components.",
  javascript: "JavaScript is a programming language used to make websites interactive.",
  html: "HTML (HyperText Markup Language) is the standard language for creating webpages.",
  css: "CSS (Cascading Style Sheets) is used to style and layout web pages.",
  frontend: "Frontend refers to the client-side of a website or app, what users interact with.",
  backend: "Backend is the server-side that handles logic, database, and server communication.",
  json: "JSON (JavaScript Object Notation) is a format for storing and transporting data.",
  nodejs: "Node.js is a runtime environment that lets you run JavaScript on the server.",
  express: "Express is a web framework for Node.js used to build APIs and web apps.",
  mongodb: "MongoDB is a NoSQL database that stores data in JSON-like documents.",
  sql: "SQL (Structured Query Language) is used to manage relational databases.",
  python: "Python is a high-level programming language known for its simplicity.",
  java: "Java is a widely-used object-oriented programming language.",
  oop: "OOP (Object-Oriented Programming) is a programming paradigm based on objects.",
  variable: "A variable stores data that can be used and changed in a program.",
  function: "A function is a reusable block of code that performs a specific task.",
  loop: "A loop repeats a block of code as long as a condition is true.",
  array: "An array is a collection of items stored at contiguous memory locations.",
  object: "An object is a data structure that contains key-value pairs.",
  framework: "A framework is a platform for building software applications.",
  library: "A library is a collection of pre-written code to help with common tasks.",
  git: "Git is a version control system to track changes in code.",
  github: "GitHub is a platform to host and collaborate on code using Git.",
  terminal: "The terminal is a text-based interface to interact with the computer.",
  cli: "CLI (Command Line Interface) allows users to type commands to perform tasks.",
  npm: "NPM (Node Package Manager) manages packages for JavaScript applications.",
  yarn: "Yarn is another JavaScript package manager like npm.",
  component: "A component is a reusable piece of a user interface in frameworks like React.",
  hook: "Hooks are functions in React that let you use state and other features.",
  state: "State is a way to store dynamic data in a component.",
  props: "Props are inputs to a component in React used to pass data.",
  lifecycle: "Component lifecycle refers to the stages a React component goes through.",
  async: "Async refers to operations that run independently of the main program flow.",
  await: "Await is used with async functions to wait for the result.",
  promise: "A promise represents the eventual result of an asynchronous operation.",
  fetch: "Fetch is a function used to make network requests.",
  axios: "Axios is a library to make HTTP requests from the browser or Node.js.",
  apiKey: "An API key is a code passed to APIs for authentication.",
  jsonStringify: "JSON.stringify converts a JavaScript object to a JSON string.",
  parseInt: "parseInt converts a string to an integer.",
  NaN: "NaN stands for Not-a-Number and appears when a number operation fails.",
  tryCatch: "try-catch is used to handle exceptions or errors in code.",
  error: "An error is a problem that stops the program from running correctly.",
  debugger: "Debugger is a tool to test and debug code line-by-line.",
  deployment: "Deployment is the process of making an app live on the internet.",
  hosting: "Hosting is the service of storing and serving web apps or websites.",
  server: "A server is a computer that provides data or services to other computers.",
  client: "A client is a device or program that accesses a service from a server.",
  request: "A request is a call made to a server asking for data or services.",
  response: "A response is the data returned by the server to the client.",
  http: "HTTP (Hypertext Transfer Protocol) is used for communication on the web.",
  https: "HTTPS is a secure version of HTTP using encryption.",
  ssl: "SSL (Secure Sockets Layer) encrypts data between browser and server.",
  cors: "CORS (Cross-Origin Resource Sharing) allows or restricts resources on web pages.",
  REST: "REST is an API design style using standard HTTP methods.",
  CRUD: "CRUD stands for Create, Read, Update, Delete — basic operations in databases.",
  MVC: "MVC (Model-View-Controller) is a design pattern in software development.",
  IDE: "IDE (Integrated Development Environment) is software for writing and testing code.",
  VSCode: "VS Code is a popular code editor developed by Microsoft.",
  compiler: "A compiler translates code from high-level to machine language.",
  interpreter: "An interpreter runs code line-by-line without compiling it first.",
  bug: "A bug is a mistake or problem in a program.",
  patch: "A patch is an update that fixes bugs or adds features.",
  versioning: "Versioning is managing changes in software over time.",
  token: "A token is used for authentication and access in APIs.",
  login: "Login is the process of verifying a user's identity.",
  authentication: "Authentication is verifying who a user is.",
  authorization: "Authorization is verifying what a user has access to.",
  session: "A session keeps track of user activity after logging in.",
  cookie: "A cookie stores small pieces of data on the user's device.",
  localStorage: "localStorage stores data in the browser permanently until cleared.",
  cache: "Cache stores data temporarily to load faster next time.",
  render: "Render means displaying elements on the screen.",
  DOM: "DOM (Document Object Model) represents the structure of a web page.",
  SEO: "SEO (Search Engine Optimization) improves site ranking in search engines.",
  analytics: "Analytics tracks user behavior on a website or app.",
  pixel: "A pixel is the smallest unit of a digital image or display.",
  responsive: "Responsive design adjusts layout based on screen size.",
  mediaQuery: "Media queries apply styles based on device characteristics.",
  flexbox: "Flexbox is a layout system in CSS for aligning items.",
  grid: "CSS Grid is a layout system to arrange content in rows and columns.",
  zIndex: "z-index controls the vertical stacking order of elements.",
  overflow: "Overflow defines how content is handled when it overflows a container.",
  transition: "Transition adds smooth animation between CSS property changes.",
  transform: "Transform applies visual effects like rotate, scale, skew to elements.",
  shadow: "Shadow adds depth by displaying blur and offset around elements.",
  theme: "A theme defines the visual styling of an app or website.",
  darkMode: "Dark Mode is a color scheme with light text on dark background.",
  accessibility: "Accessibility ensures apps are usable by people with disabilities.",
  UX: "UX (User Experience) is how a person feels when using a product.",
  UI: "UI (User Interface) is the layout and design of an application.",
  wireframe: "A wireframe is a rough layout of an app’s design.",
  prototype: "A prototype is a model of a final product to test design.",
  agile: "Agile is a flexible software development method based on iteration.",
  sprint: "Sprint is a set time period in Agile to complete specific tasks.",
  kanban: "Kanban is a board system for managing tasks visually.",
  devOps: "DevOps integrates development and operations for faster delivery.",
  
};

const GeminiSummary = () => {
  const [input, setInput] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setSummary('');

    
    setTimeout(() => {
      const word = input.trim().toLowerCase();
      if (dummyData[word]) {
        setSummary(dummyData[word]);
      } else {
        setSummary('⚠️ No explanation found for this word.');
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.title}>📘 Word Detail Finder</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter a word..."
        value={input}
        onChangeText={setInput}
        placeholderTextColor="#666"
      />

      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Get Explanation</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" color="#555" style={{ marginTop: 30 }} />
      ) : summary ? (
        <ScrollView style={styles.resultBox}>
          <Text style={styles.resultText}>{summary}</Text>
        </ScrollView>
      ) : null}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF', 
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#444',
    textAlign: 'center',
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    elevation: 4,
    color: '#000',
  },
  button: {
    backgroundColor: '#e62727ff',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 15,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultBox: {
    backgroundColor: '#fff',
    marginTop: 25,
    borderRadius: 12,
    padding: 15,
    elevation: 2,
    maxHeight: '60%',
  },
  resultText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});

export default GeminiSummary;
