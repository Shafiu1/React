import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import MyApp from './MyApp.jsx'


const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {
    href:"https://google.com",target:'_blank'
  },
  'click me to visit google'
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyApp/>
    {AnotherElement}<br/>
    {/* //for variable used the currly breces. the tutorial didn't show you that. */}
    {reactElement}
  </StrictMode>,
)
