import React from 'react'

export default function JavasInJSX() {

    const avatar ='https://i.imgur.com/7vQD0fPs.jpg';
    const description = "Gregorio Y. Zara";
  return (
    <div>
        <img
            className='avatar rounded'
            src={avatar}
            alt={description}
        />
    </div>
  )
}
