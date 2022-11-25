import React from 'react'
import { Link, Outlet } from "react-router-dom"

export default function Home() {
  return (
    <>
     <div className="">
     Component - Home.js
     <Link to="/user"> User </Link>|| 
     <Link to="/driver"> Driver </Link>

     <Outlet/>
    </div> 
    </>
  )
}