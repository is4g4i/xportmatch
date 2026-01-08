import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { StrictMode } from "react"

import '@/assets/scss/style.scss'
import ScrollToTop from './utils/scrollToTop'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={'/'}>
      <ScrollToTop routes={["/explore"]} />
      <App />
    </BrowserRouter>
  </StrictMode>
)
