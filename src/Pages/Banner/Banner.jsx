import React, { useEffect } from 'react';
import banner from '../../assets/Virus.svg';
import bannerPerson from '../../assets/banner.png';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Banner = () => {
    useEffect(() => {
        Aos.init({
            duration: 1200,
        });
    }, [])
    return (
        <div className="relative bg-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between md:px-8 px-5 pt-8 h-full overflow-hidden">
                <div className=" max-w-2xl mb-6 md:mb-0">
                    <h1 data-aos="fade-right" className="lg:text-5xl  text-2xl text-[#130f40] font-bold mb-4">Safeguarding Health</h1>
                    <h1 data-aos="fade-right" className="lg:text-5xl  text-2xl text-[#130f40] font-bold mb-4">with Vaccination</h1>
                    <h1 data-aos="fade-right" className="lg:text-5xl  text-2xl text-[#130f40] font-bold mb-4">Programs</h1>
                    <p data-aos="fade-right" className="md:text-lg text-[#525252] mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit eaque dignissimos officiis repellendus optio mollitia magni quam dolorum praesentium enim.</p>
                    <Link to={'/appointment'}>
                        <button data-aos="fade-left" className="lg:px-4 px-2 shadow-2xl shadow-slate-900 md:py-2 py-1 border-b-4  bg-[#f39c12]  font-semibold  text-white border-teal-500 hover:bg-[#12CBC4] active:scale-95 transition-transform ">
                            Book An Appointment
                        </button>
                    </Link>
                </div>
                <div className="w-full md:w-auto flex-shrink-0 ">
                    <img src={bannerPerson} alt="Banner Person" className="w-full md:w-80 h-auto object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
