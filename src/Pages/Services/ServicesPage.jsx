import React from 'react';
import PageTopPages from '../../Components/PageTopPages';
import service from '../../assets/service.jpg';
import { Link } from 'react-router-dom';
import Services from '../Services';
import Ourdoctor from '../OurDoctor/Ourdoctor';

const ServicesPage = () => {
    return (
        <div>
            <PageTopPages
                image={service}
                title="Services"
                subtitle={<span><Link className='hover:text-[#f39c12]' to="/">Home </Link> /  Services</span>}
            />
            <Services></Services>
            <Ourdoctor></Ourdoctor>
        </div>
    );
};

export default ServicesPage;