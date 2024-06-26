import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom"
import App from './App';
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from './components/Navbar';
import Footer from './components/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Navbar/>
        <App />
        <Footer/>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);

