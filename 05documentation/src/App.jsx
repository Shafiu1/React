import { useState } from 'react'
// import './App.css'

import {people} from './components/data.jsx';
import { getImageUrl } from './components/utils';
function App() {
  const chemists = people.filter(person =>
    person.profession === 'chemist'
  );
  const listItems = people.map(person =>
    <li className="flex pl-6"
      key={person.id}>
      <img
        className='rounded-full w-40'
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p className='py-15 pl-4'>
        <b className=''>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
};
export default App;