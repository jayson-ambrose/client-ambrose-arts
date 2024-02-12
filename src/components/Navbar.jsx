import React from "react";

export default function Navbar () {
    
    return (
        <div className='flex justify-center'>
            <h2 className='text-2xl px-8 pt-2 hover:underline cursor-pointer'>Home</h2>
            <h2 className='text-2xl px-8 pt-2 hover:underline cursor-pointer'>Gallery</h2> 
            <h2 className='text-2xl px-8 pt-2 hover:underline cursor-pointer'>Artists</h2> 
            <h2 className='text-2xl px-8 pt-2 hover:underline cursor-pointer'>Commissions</h2>  
        </div>
        
    )
}

// Notes:

// Can use string interpolation with ternery operations to modify className and inject
// tailwind css classes. Worth noting that className must be written like className={'classes...'}.
// The curly braces allow the use of string interpolation.