import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FiltersProvider } from './contexts/filtersProducts.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </StrictMode>,
)
