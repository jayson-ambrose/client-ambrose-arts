import React from "react";
import NavbarRoute from "./NavbarRoute";

export default function Navbar () {
    
    return (
        <div className='flex justify-center'>
            <NavbarRoute routeName='Home'/>
            <NavbarRoute routeName='Gallery'/>
            <NavbarRoute routeName='Artists'/>
            <NavbarRoute routeName='Commissions'/> 
        </div>
        
    )
}

// Notes:

// Can use string interpolation with ternery operations to modify className and inject
// tailwind css classes. Worth noting that className must be written like className={'classes...'}.
// The curly braces allow the use of string interpolation.