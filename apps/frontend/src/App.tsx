import React, { useState, useEffect } from 'react';
import './App.css';
import PostList from 'components/Post/PostList';
import { Post } from 'types/types';
import { ChakraProvider, DarkMode } from '@chakra-ui/react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginStart } from './redux/actions/authActions';


function App() {

  const [items, setItems] = useState<Post[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts").then(
      (data) => {
        console.log(data.data.post);

        setItems(data.data.post);
      }
    )
    dispatch(loginStart("muammer1@gmail.com", "123456"));
    //console.log(dispatch);

  }, [dispatch])

  return (
    <ChakraProvider theme={DarkMode}>
      <div className="App">
        <PostList {...{ items, display: "vertical" }} >

        </PostList>
      </div>
    </ChakraProvider>
  );
}


export default App;
