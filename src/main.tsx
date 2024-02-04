import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage1 from './HomePage1.jsx'
import './index.css'
import { HomePage2 } from './HomePage2.jsx'
import { Homepage3 } from './Homepage3.jsx'
import { Homepage4 } from './Homepage4.jsx'
import { Homepage5 } from './HomePage5.jsx'
import { Homepage6 } from './HomePage6.jsx'
import { HomePage10 } from './HomePage10.js'
import { Homepage8 } from './HomePage8.js'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <HomePage1 /> */}
    {/* <HomePage2 /> */}
    {/* <Homepage3 /> */}
    {/* <Homepage4 /> */}
    {/* <Homepage5 /> */}
    {/* <Homepage6 /> */}
    {/* <HomePage10 /> */}
    <Homepage8 />
  </React.StrictMode>,
)
