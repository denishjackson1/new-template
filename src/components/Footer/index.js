import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/Ajo.png';


const Footer = () => {
    return (
        <section className="bg-dark footer full-weight">
        <footer className="d-flex padding-horizontal-xlg space-around">
            <div className="margin-top-md d-flex column">
                <div>
               <img src={logo} alt="img" /> 
               </div>
               <div className="text">
               <p className="color2 margin-top-sm font-sm justify">We are great coders. Nullam venenatis ornare neque tempor cursus. Fusce rhoncus est at porttitor facilisis. Vivamus at odio consequat, vehicula eros ut, </p>
               <p className="color2">Ajosu 2021. All rights reserved</p>
               </div>
            </div>
            <div className="d-flex column padding-vertical-lg">
                <h2 className="color2">Company</h2>
                <div className="d-flex column">
              <Link className="font-sm color2" to="/aboutus">About</Link>
              <Link className="font-sm color2" to="/">Testimonials</Link>
              <Link className="font-sm color2" to="/">Terms & Conditions</Link>
              <Link className="font-sm color2" to="/">App</Link>
            </div>
            </div>

            <div className="d-flex column padding-vertical-lg">
                <h2 className="color2">Help</h2>
                <div className="d-flex column">
              <Link className="font-sm color2" to="/contact">Help Center</Link>
              <Link className="font-sm color2" to="/">Contact Support</Link>
              <Link className="font-sm color2" to="/">Instructions</Link>
              <Link className="font-sm color2" to="/">How it Works</Link>
            </div>
            </div>
        </footer>
        </section>
    )
}

export default Footer