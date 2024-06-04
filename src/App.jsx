import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useSetRecoilState, } from 'recoil'
import { activeUserAtom, loggedInAtom } from './lib/atoms'
import { urlPrefix } from '/public/helpers.js'

//----------component imports---------------------
import Navbar from './components/ui/Navbar'
import LandingPage from './components/landing/LandingPage'
import TitleLine from './components/layout/TitleLine'
import Gallery from './components/gallery/Gallery'
import Artists from './components/artists/Artists'
import Commissions from './components/commissions/Commissions'
import Dashboard from './components/dashboard/Dashboard'
import BottomLinks from './components/layout/BottomLinks'
//------------------------------------------------

export default function App() {

  const setActiveUser = useSetRecoilState(activeUserAtom)
  const setLoggedIn = useSetRecoilState(loggedInAtom)

  async function checkSession() {
    await fetch (`${urlPrefix}/checksession`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
    },
    }

    )
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
