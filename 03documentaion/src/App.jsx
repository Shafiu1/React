import React from 'react'
import Profile from './components/Profile.jsx'
import Gallery from './components/Gallery.jsx'
import JavasInJSX from './components/JavasInJSX.jsx';
import TodoList from './components/TodoList.jsx';
export default function App() {
  return (
    <div className="ml">
      <Gallery/>
      <Profile/>
      <JavasInJSX/>
      <TodoList/>
    </div>
  );
}
