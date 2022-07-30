import React, { useState, useEffect } from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { loginStart } from './redux/actions/authActions';
import Navbar from 'components/Shared/Navbar';
import Text from 'components/Text';
import Register from 'components/Auth/Register'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from 'components/Shared/Footer';
import Login from 'components/Auth/Login';
import HomePage from 'pages/HomePage';

function App() {

  //const [items, setItems] = useState<Post[]>([]);
  //const dispatch = useDispatch();

  return (
    <ChakraProvider >
      <div className="App">
        <BrowserRouter >
          <Navbar />
          <Routes >
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}


export default App;
