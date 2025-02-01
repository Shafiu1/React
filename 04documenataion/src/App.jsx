import { useState } from 'react'
// import './App.css'

function Item({isPacked,name}){
  return <li className='item'>
  {isPacked?(
    <del>
      {name+"✅"}
    </del>
    ):(
      name
    )}
  </li>
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Sally Ride's Packing List</h1>
      <ul className="list-disc pl-5">
        <Item
          isPacked={true}
          name="Space Suit"
        />
        <Item
            isPacked={true}
            name="Helmet with a golden leaf"
          />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </>
  )
}

export default App
