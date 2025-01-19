// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 15;
  const addValue=()=>{
    counter+=1;
    console.log(counter);
  }
  const decreaseValue = ()=>{
    counter-=1;
    console.log(counter);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value:{counter}</h2>

      <button
      onClick={addValue}>Add value</button>
      <br/>
      <br/>
      <button
      onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App
