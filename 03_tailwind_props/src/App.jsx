import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username:"hitesh",
    age:21
  }
  return (
    <div className="bg-gray-800 justify-center pb-4  justify-center">
      {/* <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Shafiul Alam</h1> */}
      <Card username="Rasel" btnText="Click"/>
      <div className='bg-green-500 w-10 h-6 rounded-lg pl-2 pr-2 '>Test</div>
      <Card username="Shafiul" btnText="visit me"/>
    </div>
  )
}

export default App
