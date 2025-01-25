import { useState } from "react";

function MyButton(){
    const [count,setCount]=useState(0);
    function handleClick(){
        alert('You clicked me!')
    }
    function handleClick2(){
        setCount(count+1)
    }

    return(
        <div>
            <button onClick={handleClick} className="bg-gray-400 rounded-sm ml-1 mb-2">
            Click me!
            </button>
            <button onClick={handleClick2} className="bg-gray-400 rounded-sm ml-1 mb-2">Clicked {count} Times
            </button>
        </div>
    );
}

export default MyButton;