import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import "bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './scss/style.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)

AOS.init();