import React from 'react';
import aboutphoto from '../../assets/conpage.jpg'
import { Link } from 'react-router-dom';
import PageTopPages from '../../Components/PageTopPages';
import ContactUs from './ContactUs';

const ContactUsPage = () => {
    return (
        <div>
            <PageTopPages
                image={aboutphoto}
                title="Contact Us"
                subtitle={<span><Link className='hover:text-[#f39c12]' to="/">Home </Link> / Contact Us</span>}
            />
            <ContactUs></ContactUs>
        </div>
    );
};

export default ContactUsPage;