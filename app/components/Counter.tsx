"use client"
import React, { useState } from 'react'
import Button from './Button';


  type Datatype={
    name:string,
    id:number
  }
const Counter = () => {
  const data:Datatype[]=[{
  name:"khizar",
  id:1},
  {
  name:"hassan",
  id:2
},
  {
    name:"usman",
  id:3
  }]
  const [name, setName] = useState(0)
  function increment() {
    setName((prevName) => (prevName + 1)% data.length);
          
        }
        function decrement() {
            setName((prevName) => (prevName - 1+data.length ) % data.length);
                }
      function reset() {
              setName(0)
      }
        
  return (
    <div className="flex justify-center items-center gap-2 min-h-screen">
      
    <Button sign="+" onClick={increment}/>
    <h2> {data[name].id}. {data[name].name}</h2>
    <Button sign="-" onClick={decrement}/>
    <Button sign="reset" onClick={reset}/>
    </div>
  )
}

export default Counter
