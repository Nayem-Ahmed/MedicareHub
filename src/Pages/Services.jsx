import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

import servicesbg from '../assets/servicesbg.svg';
// Importing individual icons
import servicesicon1 from '../assets/surgeon.png';
import servicesicon2 from '../assets/stethoscope.png';
import servicesicon3 from '../assets/vaccine.png';
import servicesicon4 from '../assets/medical.png';
import servicesicon5 from '../assets/liver.png';
import servicesicon6 from '../assets/arthritis.png';

const Services = () => {
    const [servicesData, setServicesData] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, [])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(servicesData => setServicesData(servicesData))
    }, [])

    // Mapping icon names to imported icons
    const iconMap = {
        'surgeon.png': servicesicon1,
        'stethoscope.png': servicesicon2,
        'vaccine.png': servicesicon3,
        'medical.png': servicesicon4,
        'liver.png': servicesicon5,
        'arthritis.png': servicesicon6
    };
    return (
        <div style={{ backgroundImage: `url(${servicesbg})` }} className='md:px-8 px-5 bg-cover bg-center'>
            <div className='py-5'>
                <div className='max-w-xl mx-auto text-center'>
                    <p className='text-[#12CBC4] mb-4 font-semibold'>Our Services</p>
                    <h1 className='lg:text-3xl text-2xl text-[#130f40] font-bold mb-4'>Professional Medical Services</h1>
                    <p className="text-md text-[#525252] mb-6">
                        We understand that each patient is different, and we strive to offer services that are specifically designed to meet your individual health requirements.
                    </p>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1  gap-5 mt-10'>

                    {
                        servicesData?.map(service => (
                            <div key={service.id} data-aos="fade-up" className="bg-white bg-opacity-70 p-10 rounded-lg text-center shadow-lg mx-auto flex flex-col justify-between">
                                <div>
                                    <div className="mb-4">
                                        <img className="w-24 mx-auto border-4 border-[#12CBC4] rounded-full p-2" src={iconMap[service.icon]} alt="Service Icon" />
                                    </div>
                                    <h1 className="text-2xl text-[#130f40] font-bold mb-3">{service.heading}</h1>
                                    <p className="text-[#525252] mb-4">{service.title}</p>
                                </div>
                                <div className="flex justify-center mt-auto">
                                    <Link to={`/servicesDetails/${service.id}`}>
                                        <button className="px-6 py-3 text-[#12CBC4] bg-white border border-[#12CBC4] rounded-md hover:bg-[#12CBC4] hover:text-white transition-all duration-200">
                                            Learn More
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
