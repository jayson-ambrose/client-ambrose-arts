import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar ({ routeName, name}) {

    const location = useLocation()

    return(
        <h2 className={`text-3xl px-8 pt-2 hover:underline cursor-pointer font-forum
            select-none ${location.pathname == routeName ? 'underline' : null}`}>
                <Link to={routeName}>{name}</Link>
        </h2>
    )
}