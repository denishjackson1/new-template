import React from 'react';
import { PageWrapper } from '../components';
import { AboutUs, ThriftPlan, HowitWorks, WhatPeople, HeroSection } from './Components';
import { Redirect } from 'react-router-dom';

const Home = () => {
	return (
		<PageWrapper>
			<HeroSection />
			<HowitWorks />
			<AboutUs />
			<ThriftPlan />
			<WhatPeople />
		</PageWrapper>
		//
	);
};

export default Home;
