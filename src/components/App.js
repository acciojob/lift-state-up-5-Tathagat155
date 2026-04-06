
import React from "react";
import {useState} from 'react';
import './../styles/App.css';
import Child from './Child.js';
const App = () => {
  const[isLoggedIn,setLogin]=useState(false);
  return (
    <div>
      <h1>Parent Component</h1>
     <Child isLoggedIn={isLoggedIn} setLogin={setLogin}/>
    </div>
  )
}

export default App
