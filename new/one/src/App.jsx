// import React from 'react';
import './App.css';

import React,{useState} from "react"

const App = () => {
  const[count,setcount] =useState(0)
  return (
    <div className='anna'>
      <div className="who">
        {count}

      </div>
      <button onClick={()=>setcount(count+2)}>+</button>
    </div>
  )
}

export default App

