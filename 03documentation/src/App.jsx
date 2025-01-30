import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Avatar from './components/Avatar'
import {getImageUrl} from './components/Utils.jsx'


function Card({children}){
  return(
    <div className="border-2 border-t-red-500 border-b-blue-600 border-l-green-400 border-r-yellow-500 rounded-xl px-4 py-4">
      {children}
    </div>
  );
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1></h1>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Fucking Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
      <Card>
        <Avatar
          size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
        />
        <h3>Shafiul Alam</h3>
        <a href='www.google.com' target="_blank">Click Me</a>
      </Card>
    </>
  )
}

export default App
