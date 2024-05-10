import React from "react";
import { Routes, Route } from 'react-router-dom'

import Heading from "./Heading";
import DashboardNavbar from "./DashboardNavbar";
import Testroute from "./Testroute";

export default function Dashboard () {

    return (
        <div className="flex flex-col justify-center items-center">
            <Heading name='Admin Dashboard'/>
            <DashboardNavbar/>
            <Routes>
                <Route exact path='/test' element={<Testroute/>}/>
            </Routes>
        </div>
    )
}