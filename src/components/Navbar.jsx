import React from "react";
import NavbarRoute from "./NavbarRoute";

export default function Navbar () {
    
    return (
        <div className='flex justify-center'>
            <NavbarRoute routeName='/' name='Home'/>
            <NavbarRoute routeName='/gallery' name='Gallery'/>
            <NavbarRoute routeName='/artists' name='Artists'/>
            <NavbarRoute routeName='/commissions' name='Commissions'/> 
        </div>
    )
}
