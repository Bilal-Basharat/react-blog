import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
export default function About() {
  // const text = ['a', 'b', 'c', 'd'];
  // const handleClick=(event)=>{
  //   event.preventDefault();
  // }
  const [color,setColor]=useState("");
  const handlegreen=()=>{
    setColor("green");
  }
  const handleblue=()=>{
    setColor("blue");
  }
  const handlered=()=>{
    setColor("red");
  }
  return (
    <div style={{backgroundColor:`${color}`}}>
      <Navbar />
      {/* {text.map((item, index) => (
        <h1 style={{ color: "red", backgroundColor: "green" }}>{item}</h1>
      ))} */}
      <button onClick={handlegreen}>Green</button>
      <button onClick={handleblue}>Blue</button>
      <button onClick={handlered}>Red</button>

    </div>

  )
}
