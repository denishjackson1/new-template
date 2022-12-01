import React from 'react';
import {PageWrapper} from '../components'
import {ContactHero, ContactBody} from './Components'
import { Redirect } from 'react-router-dom';

const AboutUs = () => {
  return (
      <PageWrapper>
          <ContactHero />
          <ContactBody />
      </PageWrapper>
    
  )
}


export default AboutUs;
