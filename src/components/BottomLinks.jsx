import React, { useState } from 'react'
import AdminLoginModal from './AdminLoginModal'

export default function BottomLinks() {

    const [loginModal, setLoginModal] = useState(false)

    function handleSetLoginModal () {
        setLoginModal(true)
    }

    return(
        <div className='flex justify-center items-end'>
            <h1 onClick={() => handleSetLoginModal()} className='text-dark select-none cursor-pointer'>Admin Login</h1>
            <AdminLoginModal loginModal={loginModal} setLoginModal={setLoginModal}/>
        </div>
    )
}