import React from 'react';
import aboutPic from '../assets/aboutpic.jpg'
import aboutimgbg from '../assets/about.svg'
import { FaCheckCircle } from 'react-icons/fa';


const About = () => {
    return (
        <div className='flex flex-col md:flex-row md:gap-20 gap-5 md:px-8 px-5 my-10'>
            <div className='md:w-1/2'>
                <img className='h-[545px] object-cover border-r-8 border-t-8  border-[#12CBC4]' src={aboutPic} alt="" />
            </div>
            <div className='md:w-1/2'>
                <p className='text-[#12CBC4] mb-4 font-semibold'>About Us</p>
                <h1 className='lg:text-3xl md:text-2xl text-[#130f40] font-bold mb-4'>Your Reliable Partner in Certified <br></br> Healthcare Solutions</h1>
                <p className="text-md text-[#525252] mb-6">
                    We are dedicated to improving the health and well-being of communities through comprehensive  programs. Our mission is to provide accessible vaccination services, raise awareness about the importance of immunization, and ensure a healthier future for all.
                </p>
                <h2 className='text-xl font-semibold mb-3 text-[#130f40]'>Our Values</h2>
                <ul className="text-sm font-semibold text-[#525252] mb-6 list-none">
                    <li className='flex items-center mb-3 '>
                        <div><FaCheckCircle className='text-[#12CBC4] mr-2 text-xl' /></div> <span>   Ensuring that vaccines are available to all, regardless of their circumstances.</span>
                    </li>
                    <li className='flex items-center mb-3'>
                        <div><FaCheckCircle className='text-[#12CBC4] mr-2 text-xl' /></div>
                        <span> Raising awareness and understanding of the importance of immunization.</span>
                    </li>
                    <li className='flex items-center mb-3'>
                        <div><FaCheckCircle className='text-[#12CBC4] mr-2 text-xl' /></div> <span>  Working closely with communities to promote public health.</span>
                    </li>
                    <li className='flex items-center mb-3'>
                        <div><FaCheckCircle className='text-[#12CBC4] mr-2 text-xl' /></div> <span> Fostering a culture of health and well-being.</span>
                    </li>
 
                </ul>
                <button className="lg:px-5 px-3 shadow-2xl shadow-slate-900 md:py-2 py-1 border-b-4  bg-[#f39c12]  font-semibold  text-white border-teal-500 hover:bg-[#12CBC4] active:scale-95 transition-transform ">
                    About Us
                </button>
            </div>
        </div>
    );
};

export default About;