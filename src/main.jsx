import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import DataProvider from './provider/DataProvider'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/Ghibli-Studio-React'>
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
