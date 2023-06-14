import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { AuthProvaider } from './helpers/useAuth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvaider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvaider>
  </React.StrictMode>
)
