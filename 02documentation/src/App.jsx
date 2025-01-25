import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Profile() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img
          className='w-30 h-30 m-2'
          src='https://i.imgur.com/MK3eW3Am.jpg'
          alt='Katherine Johnson'
      />
    </>
  )
}

function App(){
  return(
    <section>
      <h1>Amaging Sceintist</h1>
      <Profile/>
      <Profile/>
      <Profile/>
    </section>
  );
}

export default App
