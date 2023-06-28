import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MyThemeProvider } from './components/MyThemeProvider.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <MyThemeProvider>
      <App />
     </MyThemeProvider>
  </React.StrictMode>,
)
