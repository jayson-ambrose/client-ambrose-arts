import React, { useState } from "react"
import Heading from "src/components/ui/Heading"
import { loggedInAtom } from "../../lib/atoms"
import { useRecoilValue } from "recoil"


export default function Welcome () {
    
    const loggedIn = useRecoilValue(loggedInAtom)

    const underConstruction = (
        <div className="flex flex-col pt-5 items-center justify-center">
            <h1>SITE UNDER CONSTRUCTION</h1>
            <p>Please log in to view the site. This is not a finished product and there may be frequent downtime while we work on the site.</p>            
        </div>
    )

    return (            
        <div className="flex flex-col justify-center items-center">
            <Heading name='Welcome'/>
            {loggedIn ? null: underConstruction}             
        </div>     
    )
}