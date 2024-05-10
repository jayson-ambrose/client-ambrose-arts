import React from "react";
import { Routes, Route } from 'react-router-dom'
import DashboardRoute from "./DashboardRoute";

export default function DashboardNavbar() {

    return (
        <DashboardRoute name='Test' routeName='/dashboard/test'/>
    )
}
