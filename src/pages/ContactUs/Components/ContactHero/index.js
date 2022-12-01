import React from 'react';
import {Link} from 'react-router-dom';
import ellipse1 from "../../../AboutUs/assets/Ellipse 1.svg";
import ellipse2 from "../../../AboutUs/assets/Ellipse 2.svg";
import ellipse5 from "../../../AboutUs/assets/Ellipse 5.svg";
import polygon1 from "../../../AboutUs/assets/Polygon 1.svg";
import polygon2 from "../../../AboutUs/assets/Polygon 2.svg";
import polygon3 from "../../../AboutUs/assets/Polygon 3.svg";

const ContactHero = () => {
  return (
    <section class="hero-about-section bg-color1 text-light mb-5">
      <div class="container">
        <div class="row my-5 py-5">
          <div class=" col-md-12 my-5 hero-text  mx-sm-auto  sm-center">
            <h1 class="font-weight-bold  hero-header-text">Contact</h1>
            <p class="hero-header-texts"><Link to="/">Home</Link> {">"} Contact</p>
          </div>
        </div>
        <div id="background-wrap">
          <div class="bubble x1">
            <img src={ellipse2} alt="" />
          </div>

          <div class="bubble x2">
            <img src={ellipse2} alt="" />
          </div>
          <div class="bubble x3">
            <img src={ellipse2} alt="" />
          </div>
          <div class="bubble x7">
            <img src={ellipse2} alt="" />
          </div>
          <div class="bubble x9">
            <img src={ellipse1} alt="" />
          </div>
          <div class="bubble x1">
            <img src={ellipse1} alt="" />
          </div>
          <div class="bubble x3">
            <img src={ellipse5} alt="" />
          </div>
          <div class="bubble x4">
            <img src={polygon1} alt="" />
          </div>
          <div class="bubble x5">
            <img src={polygon3} alt="" />
          </div>
          <div class="bubble x6">
            <img src={ellipse1} alt="" />
          </div>
          <div class="bubble x7">
            <img src={polygon2} alt="" />
          </div>
          <div class="bubble x8">
            <img src={ellipse1} alt="" />
          </div>
          <div class="bubble x9">
            <img src={ellipse5} alt="" />
          </div>
          <div class="bubble x10">
            <img src={polygon1} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
