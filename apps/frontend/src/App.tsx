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
import ProtectedRoute from 'utils/ProtectedRoute';
import PostDetailPage from 'pages/PostDetailPage';

function App() {

  return (
    <ChakraProvider >
      <Toaster />
      <div className="App">
        <BrowserRouter >
          <Navbar />
          <Routes >
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={
              <ProtectedRoute {...{ redirect: '/', isAuth: true }}>
                <Register />
              </ProtectedRoute>}
            />
            <Route path='/login' element={
              <ProtectedRoute {...{ redirect: '/', isAuth: true }}>
                <Login />
              </ProtectedRoute>}
            />
            <Route path='/posts' element={
              <ProtectedRoute {...{ redirect: '/login', isAuth: false }}>
                <PostsPage />
              </ProtectedRoute>}
            />
            <Route path='/post-detail' element={
              <ProtectedRoute {...{ redirect: '/login', isAuth: false }}>
                <PostDetailPage />
              </ProtectedRoute>}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}


export default App;
