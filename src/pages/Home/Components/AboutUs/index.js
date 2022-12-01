import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
      <div className="about-us-section">
        <div className="bg-color1 padding-vertical-md padding-horizontal-md d-flex-about">
          <div className="bg-white margin-horizontal-md margin-vertical-md border-r-circle bg-img"></div>
          <div className="about-text text-color1 margin-horizontal-md margin-vertical-md">
            <h2 className="font-weight-bold">About us</h2>
            <p className='font-md'>
              We at AJOSU Technological Limited are passionate and vibrant techies ( Programmers) that want to be innovative by creating a platform that provides essential online banking services to people.
              We integrated technology and banking services that enable both young, old, male, female, employed and unemployed internet users to an easy and secure saving platform  and then suggest Investment plans to them that will lead to more creation of employment and growth in Africa.
            </p>
            <Link to="/aboutus"><button className="bg-white color1 margin-top-md padding-horizontal-md font-weight-bold padding-vertical-sm border-radius-xs">Read more</button></Link>
          </div>
        </div>
      </div>
    )
}
export default AboutUs
