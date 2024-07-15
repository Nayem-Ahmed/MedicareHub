import React from 'react';
import Banner from './Banner/Banner';
import About from './About';
import Services from './Services';
import Ourdoctor from './OurDoctor/Ourdoctor';
import Appointment from './Apoinment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Ourdoctor></Ourdoctor>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;