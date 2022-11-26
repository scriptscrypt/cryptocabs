import React  from 'react'
import { Link, Outlet } from "react-router-dom"
import Navbar from '../../Navbar'
import RideDetails from './RideDetails'



export default function UserDashboard() {
  
  return (
    <>
    <Navbar/>
      {/* Component - UserDashboard.js    */}

      <RideDetails/>
      <Outlet />
    </>
  )
}
