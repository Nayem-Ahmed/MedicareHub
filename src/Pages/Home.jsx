import React from 'react';
import Banner from './Banner/Banner';
import About from './About';
import Services from './Services';
import Ourdoctor from './OurDoctor/Ourdoctor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Ourdoctor></Ourdoctor>
        </div>
    );
};

export default Home;