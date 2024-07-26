import React from 'react';
import aboutphoto from '../assets/about.jpg'
import PageTopPages from '../Components/PageTopPages';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            <PageTopPages
                image={aboutphoto}
                title="About Us"
                subtitle={<span><Link className='hover:text-[#f39c12]' to="/">Home </Link> / About Us</span>}
            />
        </div>
    );
};

export default AboutPage;