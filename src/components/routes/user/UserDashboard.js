import React  from 'react'
import { Link, Outlet } from "react-router-dom"



export default function UserDashboard() {
  
  return (
    <>
        Component - UserDashboard.js   
      <Link to="/user/bookride"> Bookride </Link>|| 
      <Link to="/user/previousrides"> Previous rides </Link> 
      <Link to="/user/userprofile"> View Profile </Link> 

      <Outlet />
    </>
  )
}
