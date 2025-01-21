import { useState, useCallback } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");


  //read useCallback documentation of react..
  const passwordGenerator = useCallback(()=>{
      let pass="";
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numAllow) str+="0123456789";
      if(charAllow) str+="!@#*^*-+=[](){}";
      for( let i=1;i<=Array.length;i++){
        let char=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(char);
      }
      setPassword(pass);
  },[length,numAllow,charAllow,setPassword])

  return (
    <div>
      <div className="w-screen max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800" >TEST</div>
    </div>
  )
}

export default App
