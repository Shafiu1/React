import React from 'react'

export default function TodoList() {
  const person ={
    name:'Gregorio Y. Zara',
    theme:{
        backgroundColor:'black',
        color:'pink'
    }
  }
  return (
    <div style={person.theme}>
    <h2>{person.name}'s Todos</h2>
    <img
        className='avatar rounded-full p-2'
        src='https://i.imgur.com/7vQD0fPs.jpg'
        alt='Gregorio Y. Zara'
    />
        <ul className='pl-4 list-disc bg-green-100 text-black'>
            <li>Improve the videophone</li>
            <li>Prepare aeronautics lectures</li>
            <li>Work on the alcohol-fueled engine</li>
        </ul>
    </div>
  );
}
