import { useState, useCallback,useEffect, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copy");

  //useRef hook
  const passwordRef = useRef()

  //read useCallback documentation of react..
  const passwordGenerator = useCallback(()=>{
      let pass="";
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if(numAllow) str+="0123456789";
      if(charAllow) str+="!@#*^*-+=[](){}";
      for( let i=1;i<=length;i++){
        let char=Math.floor(Math.random()*str.length+1);
        pass+=str.charAt(char);
      }
      setPassword(pass);
  },[length,numAllow,charAllow,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password);
    
    //extra for showing copied text. Still some bug

    // if(copyText=='Copy'){
    //   setCopyText("Copied")
    // }else{
    //   setCopyText('Copy')
    // }
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length,numAllow,charAllow,passwordGenerator])

  return (
    <div>
      <div className="w-screen max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800" >
      <h2 className="text-white text-center my-3">Password generator</h2>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref = {passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='ouline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
          {copyText}
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numAllow}
            id='numberInput'
            onChange={()=>{setNumAllow((prev)=>!prev)}}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={charAllow}
            id='charInput'
            onChange={()=>{setCharAllow((prev)=>!prev)}}
          />
          <label htmlFor='charInput'>Characters</label>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
