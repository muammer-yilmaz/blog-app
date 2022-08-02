import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from 'components/Shared/Navbar';
import Register from 'components/Auth/Register'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from 'components/Shared/Footer';
import Login from 'components/Auth/Login';
import HomePage from 'pages/HomePage';
import { Toaster } from 'react-hot-toast';
import PostsPage from 'pages/PostsPage';

function App() {

  return (
    <ChakraProvider >
      <Toaster />
      <div className="App">
        <BrowserRouter >
          <Navbar />
          <Routes >
            <Route path='/' element={<HomePage />} />
            <Route path='/posts' element={<PostsPage />} />
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
