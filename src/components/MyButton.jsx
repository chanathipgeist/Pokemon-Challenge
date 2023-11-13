import React from 'react'

function MyButton() {
const hancleClick=()=>{
    alert("You Click me!")
}

  return (
    <button onClick={hancleClick} className="border-2">
        My Button
    </button>
  )
}

export default MyButton