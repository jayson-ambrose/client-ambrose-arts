import React, { useState } from 'react'
import AdminLoginModal from '../login-logout/AdminLoginModal'
import AdminLogoutModal from '../login-logout/AdminLogoutModal'
import { useRecoilValue } from 'recoil'
import { loggedInAtom } from '../../lib/atoms'

export default function BottomLinks() {

    const [loginModal, setLoginModal] = useState(false)
    const [logoutModal, setLogoutModal] = useState(false)
    const loggedIn = useRecoilValue(loggedInAtom)

    function handleSetLoginModal () {
        setLoginModal(true)
    }

    function handleSetLogoutModal () {
        setLogoutModal(true)
    }

    const loginLink = <h1 onClick={() => handleSetLoginModal()} className='text-dark select-none cursor-pointer'>Admin Login</h1>
    const logoutLink = <h1 onClick={() => handleSetLogoutModal()} className='text-dark select-none cursor-pointer'>Logout</h1>

    return(
        <div className='flex justify-center items-end'>
            {loggedIn ? logoutLink : loginLink}
            <AdminLoginModal loginModal={loginModal} setLoginModal={setLoginModal}/>
            <AdminLogoutModal logoutModal={logoutModal} setLogoutModal={setLogoutModal}/>
        </div>
    )
}