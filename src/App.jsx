import { useState } from 'react'
import reactLogo from './assets/react.svg'
import AppRoutes from "./router/router"
import './App.css'
import MainNavbar from './compontents/MainNavbar'
import Footer from './compontents/Footer'
function App() {
  return (
    <>
    <MainNavbar/>
    <AppRoutes/>
    <Footer/>
    </>
  )
}

export default App
