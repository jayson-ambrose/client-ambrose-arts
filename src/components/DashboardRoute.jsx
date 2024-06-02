import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function DashboardRoute ({ routeName, name}) {

    const location = useLocation()

    return(
        <div className={`text-xl px-8 pt-2 hover:underline cursor-pointer font-philosopher
            font-semibold select-none ${location.pathname == routeName ? 'underline' : null}
            text-black`}>
                <Link to={routeName}>{name}</Link>
        </div>
    )
}