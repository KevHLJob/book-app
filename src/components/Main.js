import React, { useState } from 'react'
import Card from './Card';
import axios from 'axios';
const Main = () => {
  const [search, setSearch]=useState("");
  const searchBook=(evt)=>{
    if(evt.key=== "Enter"){
      console.log("Hello;");
    }
  }
  return (
    <>
      <div className='header'>
          <div className='row1'>
            <h1>El que ama la lectura tiene todo a su alcance. <br/>William Godwin</h1>
          </div>
          <div className='row2'>
            <h2>Find your book</h2>
            <div className='search'>
                <input type="text" placeholder='Enter your book name'
                value={search} onChange={e =>setSearch(e.target.value)}
                onKeyPress={searchBook} />
                <button><i class="fas fa-search"></i></button>
            </div>
            <img src='./images/books.jpg' alt=''/>
          </div>
      </div>

      <div className='container'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

      </div>
    </>
  )
}

export default Main;
