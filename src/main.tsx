import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { FeaturedCardGrid } from './pages/Landingpage/FeaturedCardGrid'
import { OTPInputField } from './components/OTPInputField'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <OTPInputField />
  </React.StrictMode>,
)
