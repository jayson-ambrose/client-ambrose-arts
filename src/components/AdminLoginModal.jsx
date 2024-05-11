import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ThemedButton from "./ThemedButton"
import { loggedInAtom, activeUserAtom } from "../lib/atoms"
import { useRecoilState, useSetRecoilState } from "recoil"

export default function AdminLoginModal({loginModal, setLoginModal}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [loggedIn, setLoggedIn] = useRecoilState(loggedInAtom)
    const setActiveUser = useSetRecoilState(activeUserAtom)

    const handleLogin = async (e) => {
        
        e?.preventDefault()

        const credentials = {username: username, password: password}

        await fetch('/api/login', {
        // await fetch('https://server-ambrose-art.onrender.com/login', {
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
                    setLoginModal(false)
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

    return (
      <Transition appear show={loginModal}>
        <Dialog
          open={loginModal}
          onClose={() => setLoginModal(false)}>

          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >          
            <div className="fixed inset-0 bg-black/50" aria-hidden="true" />  
            <div className="fixed inset-0 flex justify-center items-center align-center">
              <Dialog.Panel className="w-2/3 rounded bg-offwhite justify-center pb-5">
                <form onSubmit={handleLogin} className="flex flex-col">
                    <h1>Welcome, please enter your credentials. Contact the site administrator if you have any trouble.</h1>
                    <input onChange={handleChangeUsername} value={username} className='border border-slate-600 rounded-lg my-1 pl-1' placeholder="Username"/>
                    <input onChange={handleChangePassword} value={password} className='border border-slate-600 rounded-lg my-1 pl-1' placeholder="Password" type="password"/>
                    <ThemedButton text={'Login'} callback={handleLogin}/>
                </form>
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    )
}