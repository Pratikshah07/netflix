import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './font/NetflixSansBlack.ttf'
import './font/NetflixSansBold.ttf'
import './font/NetflixSansLight.ttf'
import './font/NetflixSansMedium.ttf'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
