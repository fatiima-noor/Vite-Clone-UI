import { Outlet } from 'react-router-dom'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import FAQs from '../components/FAQs'
import Contact from '../components/Contact'
function main_layout() {
  return (
    <>
        <Hero/>
        <Features/>
        <Testimonials/>
        {/*
  <FAQs />
*/}

        <Contact/>
        <Footer/>
        <Outlet/>
    </>
  )
}

export default main_layout
