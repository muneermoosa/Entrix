import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Plans from '../components/Pages/Plans/Plans'
import Courses from '../components/Pages/Courses/Courses'
import Home from '../components/Pages/Home/Home'
import Aboutus from '../components/AboutUs/Aboutus';
import ContactUs from '../components/Pages/ContactUs/ContactUs';
import Support from '../components/Pages/SupportUs/Support';





function LayoutRoutes() {
  return (
    <Router>
        <Header/>
       <Routes>
<Route path='/'element={<Home/>}/>
<Route path='/Entrix_solution1'element={<Home/>}/>
<Route path='/services' element={<Plans/>}/>
<Route path='/Courses'element={<Courses/>}/>
<Route path='/Aboutus'element={<Aboutus/>}/>
<Route path='/Contact'element={<ContactUs/>}/>
<Route path='/Support'element={<Support/>}/>
</Routes>
   
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes