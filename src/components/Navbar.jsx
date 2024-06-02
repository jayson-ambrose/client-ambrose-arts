import React from "react";
import NavbarRoute from "./NavbarRoute";
import { loggedInAtom, activeUserAtom } from "../lib/atoms";
import { useRecoilValue } from "recoil";

export default function Navbar () {

    const loggedIn = useRecoilValue(loggedInAtom)
    const activeUser = useRecoilValue(activeUserAtom)

    const checkLoggedIn = () => {
        if(loggedIn && activeUser?.admin) {
            return <NavbarRoute routeName='/dashboard' name='Dashboard'/>
        }
    }
    
    return (
        <div className={`flex justify-center bg-dark ${loggedIn ? null : 'hidden'}`}>
            <NavbarRoute routeName='/' name='Home'/>
            <NavbarRoute routeName='/gallery' name='Gallery'/>
            <NavbarRoute routeName='/artists' name='Artists'/>
            <NavbarRoute routeName='/commissions' name='Commissions'/> 
            {checkLoggedIn()}
        </div>
    )
}
