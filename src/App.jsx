import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSetRecoilState, } from 'recoil'
import { activeUserAtom, loggedInAtom } from './lib/atoms'
import { urlPrefix } from './lib/helpers'

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

  const setActiveUser = useSetRecoilState(activeUserAtom)
  const setLoggedIn = useSetRecoilState(loggedInAtom)

  async function checkSession() {
    await fetch (`${urlPrefix}/checksession`)
    .then(resp => {
      if(resp.ok){
        resp.json()
        .then(data => {
          setActiveUser(data)
          setLoggedIn(true)
        })
      }
    })
  }

  useEffect(() => {
    checkSession()
  })

  return (
    <div>
      <TitleLine/>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/gallery' element={<Gallery/>}/>
        <Route exact path='/artists' element={<Artists/>}/>
        <Route exact path='/commissions' element={<Commissions/>}/>
        <Route path='/dashboard/*' element={<Dashboard/>}/>
      </Routes>
      <BottomLinks />
    </div>
  )
}
