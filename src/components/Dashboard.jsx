import React from "react";
import { Routes, Route } from 'react-router-dom'

import Heading from "./Heading";
import DashboardNavbar from "./DashboardNavbar";
import GalleryManager from "./GalleryManager";

export default function Dashboard () {

    return (
        <div className="flex flex-col justify-center items-center">
            <Heading name='Admin Dashboard'/>
            <DashboardNavbar/>
            <Routes>
                <Route exact path='/gallerymanager' element={<GalleryManager/>}/>
            </Routes>
        </div>
    )
}