import React from 'react';
import Banner from './Banner/Banner';
import About from './About';
import Services from './Services';
import Ourdoctor from './OurDoctor/Ourdoctor';
import Appointment from './Apoinment';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Ourdoctor></Ourdoctor>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;