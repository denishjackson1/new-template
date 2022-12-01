import React from 'react';
import {PageWrapper} from '../components'
import {AboutHero, WeAre, WhoWeAre, FAQ, HowWeWork } from "./Components" 
import { Redirect } from 'react-router-dom';

const AboutUs = () => {
  return (
      <PageWrapper>
          <AboutHero />
          <WeAre />
          <WhoWeAre />  
          <HowWeWork />
          <FAQ />
      </PageWrapper>
    
  )
}


export default AboutUs;
