import React from 'react'
import { Routes, Route } from 'react-router-dom'

//----------component imports---------------------
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import TitleLine from './components/TitleLine'
import Gallery from './components/Gallery'
import Artists from './components/Artists'
import Commissions from './components/Commissions'
import Dashboard from './components/Dashboard'
import BottomLinks from './components/BottomLinks'
//------------------------------------------------

export default function App() {

  return (
    <div>
      <TitleLine/>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/gallery' element={<Gallery/>}/>
        <Route exact path='/artists' element={<Artists/>}/>
        <Route exact path='/commissions' element={<Commissions/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <BottomLinks />
    </div>
  )
}
