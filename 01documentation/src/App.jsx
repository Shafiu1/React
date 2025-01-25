import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import RespondEvent from './components/RespondEvent.jsx'
import ListRendering from './components/ListRendering.jsx'


function App() {
  const [count,setCount]=useState(0);
  return (
    <>
      <ListRendering/>
      <RespondEvent/>
      <RespondEvent/>
    </>
  )
}

export default App
