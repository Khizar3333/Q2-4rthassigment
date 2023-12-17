// "use client"
import React from 'react'

type ButtonProps = {
    sign: string;
    onClick: () => void;
  };
const Button = ({sign,onClick}:ButtonProps) => {
   
  return (
    <div>
      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
       
      {sign}
    </button>
    </div>
  )
}

export default Button
