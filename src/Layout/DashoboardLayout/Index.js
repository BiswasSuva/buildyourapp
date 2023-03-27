import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Navbar from './Navbar'
// import Index from "../../view/Dashboard/Index"
import SetBodyColor from '../../SetBodyColor'
import "./Dashboard.css"
function index() {
  SetBodyColor({backgroundColor: "#14181b"})
  return (
    // <div>index</div>
    <>
    <Navbar/>
    <LeftSidebar></LeftSidebar>
    <Outlet/>
    {/* <RightSidebar/> */}
    </>
  )
}

export default index