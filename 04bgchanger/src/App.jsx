import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
      <div className="w-screen h-screen duration-200"
  style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 rounded-full shadow-lg"
            style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
            <button className="outline-none px-4 rounded-full shadow-lg"
            style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
            <button className="outline-none px-4 rounded-full shadow-lg"
            style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
            <button className="outline-none px-4 rounded-full shadow-lg"
            style={{backgroundColor:"magenta"}} onClick={()=>setColor("magenta")}>Magenta</button>
            <button className="outline-none px-4 rounded-full shadow-lg"
            style={{backgroundColor:"cyan"}} onClick={()=>setColor("cyan")}>Cyan</button>
            <button className="outline-none px-4 rounded-full shadow-lg"
            style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
          </div>
        </div>
      </div>
  )
}

export default App
