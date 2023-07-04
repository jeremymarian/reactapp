import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import Sections from './Sections'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Sections />
  </React.StrictMode>,
)
