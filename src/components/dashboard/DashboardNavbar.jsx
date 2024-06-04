import React from "react";
import { Routes, Route } from 'react-router-dom'
import DashboardRoute from "./DashboardRoute";

export default function DashboardNavbar() {

    //dashboard routes => Gallery Manager/News Manager/Account Manager (probably 3 separate routes)
    //                 => My account (change password.)

    return (
        <DashboardRoute name='Gallery Manager' routeName='/dashboard/gallerymanager'/>
    )
}
