import React from "react";
import NavbarRoute from "./NavbarRoute";
import { loggedInAtom } from "../lib/atoms";
import { useRecoilValue } from "recoil";

export default function Navbar () {

    const loggedIn = useRecoilValue(loggedInAtom)
    
    return (
        <div className={`flex justify-center bg-dark ${loggedIn ? null : 'hidden'}`}>
            <NavbarRoute routeName='/' name='Home'/>
            <NavbarRoute routeName='/gallery' name='Gallery'/>
            <NavbarRoute routeName='/artists' name='Artists'/>
            <NavbarRoute routeName='/commissions' name='Commissions'/> 
        </div>
    )
}
