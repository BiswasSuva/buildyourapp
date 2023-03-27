import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import "./HomeLayout.css";
import Aos from 'aos';
import "../../../node_modules/aos/dist/aos.css"

function Index() {
  useEffect(() => {
    Aos.init();

  },[]);
  return (
    // <div>index</div>
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>

  )
}

export default Index