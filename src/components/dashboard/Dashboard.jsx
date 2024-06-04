import React from "react";
import { Routes, Route } from 'react-router-dom'

import Heading from "src/components/ui/Heading";
import DashboardNavbar from "src/components/dashboard/DashboardNavbar";
import GalleryManager from "./dashboard-gallery-manager/GalleryManager";

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