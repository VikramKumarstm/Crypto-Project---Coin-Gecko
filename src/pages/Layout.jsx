import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
        <Navbar /> {/** This navbar is the shared ui we want to across page */}
        <Outlet /> {/** The actual page which will be rendred along with Navbar */}
    </>
  )
}

export default MainLayout