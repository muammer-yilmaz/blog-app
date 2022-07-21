import React, { useState, useEffect } from 'react';
import './App.css';
import PostList from 'components/Post/PostList';
import IPost from 'Types/Post/Post';
import { ChakraProvider } from '@chakra-ui/react';
import axios from 'axios';


// const items: IPost[] = [
//   {
//     title: "adadssssssssssssssssssssss",
//     image: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_960_720.jpg",
//     body: "asdasd"
//   },
//   {
//     title: "adadssssssssssssssssssssss",
//     image: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_960_720.jpg",
//     body: "asdasd"
//   },
//   {
//     title: "adadssssssssssssssssssssss",
//     image: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_960_720.jpg",
//     body: "asdasd"
//   },
//   {
//     title: "adadssssssssssssssssssssss",
//     image: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_960_720.jpg",
//     body: "asdasd"
//   },
//   {
//     title: "adadddddddddddddddddddddddddddddddddddddddddddddddddddd",
//     image: "ads",
//     body: "asdasd"
//   },
//   {
//     title: "ad",
//     image: "ads",
//     body: "asdasd"
//   },
//   {
//     title: "ad",
//     image: "ads",
//     body: "asdasd"
//   },
//   {
//     title: "adssad",
//     body: "sdsadasd"
//   }
// ]



function App() {

  const [items, setItems] = useState<IPost[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts").then(
      (data) => {
        console.log(data.data.post);

        setItems(data.data.post);
      }
    )
  }, [])

  return (
    <ChakraProvider>
      <div className="App">
        <PostList {...{ items, display: "vertical" }} >

        </PostList>
      </div>
    </ChakraProvider>
  );
}


export default App;
