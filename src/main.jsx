import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
  <BrowserRouter>
  <ChakraProvider>
    <App />
    </ChakraProvider>
    </BrowserRouter>
  </div>,
)
