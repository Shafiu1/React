import { useState } from "react";
import imageUrl from '../assets/images/lake_park_dhaka7.jpg'

function ListRendering(){
    const [count, setCount] = useState(0)
    const user = {
        name: "Shafiul Alam",
        imageUrl:imageUrl,
        imageSize: 100,
    };

    const products = [
        { title: 'Cabbage', isFruit: false, id: 1 },
        { title: 'Garlic', isFruit: false, id: 2 },
        { title: 'Apple', isFruit: true, id: 3 },
    ];

    const listItems = products.map((product) =>{

        return <li 
            key={product.id} 
            className='ml-5 list-decimal'
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}>
            {product.title}
        </li>
    });
    return(
        <div>
            <h1>{user.name}</h1>
            <img
                className="rounded-full"
                src={user.imageUrl}
                alt={'photo of '+user.name}
                style={{width:user.imageSize,height:user.imageSize}}
            />
            <ul>{listItems}</ul>
        </div>
    );
}
export default ListRendering;