import React,{useState} from 'react';
import Axios from 'axios';
import './App.css';
import InputPost from './components/inputPost';
import PostsViews from './components/postsViews';


function App() {

  return (
    <div >
      <div className='background'>
      <InputPost/>
      <PostsViews/>
      </div>
      
     
    </div>
  );
}

export default App;
