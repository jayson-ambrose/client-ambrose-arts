import React, { useState } from "react"
import Heading from "./Heading"
import ThemedButton from "./ThemedButton"
import { loggedInAtom, activeUserAtom } from "../lib/atoms"
import { useRecoilState, useSetRecoilState } from "recoil"

export default function Welcome () {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [loggedIn, setLoggedIn] = useRecoilState(loggedInAtom)
    const setActiveUser = useSetRecoilState(activeUserAtom)

    const handleLogin = async (e) => {
        
        e?.preventDefault()

        const credentials = {username: username, password: password}

        await fetch('https://server-ambrose-art.onrender.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(credentials)
        })
        .then(resp => {
            if(resp.ok) {
                resp.json().then(data => {
                    setLoggedIn(true)
                    setActiveUser(data)
                })
            }
        })
    }

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const underConstruction = (
        <div className="flex flex-col pt-5 items-center justify-center">
            <h1>SITE UNDER CONSTRUCTION</h1>
            <p>Please log in to view the site. This is not a finished product and there may be frequent downtime while we work on the site.</p>
            <form onSubmit={handleLogin} className="flex flex-col">
                <input onChange={handleChangeUsername} value={username} className='border border-slate-600 rounded-lg my-1 pl-1' placeholder="Username"/>
                <input onChange={handleChangePassword} value={password} className='border border-slate-600 rounded-lg my-1 pl-1' placeholder="Password" type="password"/>
                <ThemedButton text={'Login'} callback={handleLogin}/>
            </form>
        </div>
    )

    return (            
        <div className="flex flex-col justify-center items-center">
            <Heading name='Welcome'/>
            {loggedIn ? null: underConstruction}             
        </div>     
    )
}