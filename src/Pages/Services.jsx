import React from 'react';
import servicesbg from '../assets/servicesbg.svg';
import servicescaerd1 from '../assets/surgeon.png';
import servicescaerd2 from '../assets/stethoscope.png';
import servicescaerd3 from '../assets/vaccine.png';
import servicescaerd4 from '../assets/medical.png';
import servicescaerd5 from '../assets/liver.png';
import servicescaerd6 from '../assets/arthritis.png';

const Services = () => {
    return (
        <div style={{ backgroundImage: `url(${servicesbg})` }} className='md:px-8 px-4 bg-cover bg-center'>
            <div className='py-5'>
                <div className='max-w-xl mx-auto text-center'>
                    <p className='text-[#12CBC4] mb-4 font-semibold'>Our Services</p>
                    <h1 className='lg:text-3xl text-2xl text-[#130f40] font-bold mb-4'>Professional Medical Services</h1>
                    <p className="text-md text-[#525252] mb-6">
                        We understand that each patient is different, and we strive to offer services that are specifically designed to meet your individual health requirements.
                    </p>
                </div>

                <div className='grid  lg:grid-cols-3  gap-5 mt-10'>
                    <div className="bg-white bg-opacity-70 p-10 rounded-lg text-center shadow-lg max-w-sm mx-auto">
                        <div className="mb-4">
                            <img className="w-24 mx-auto border-4 border-[#12CBC4] rounded-full p-2" src={servicescaerd1} alt="Service Icon" />
                        </div>
                        <h1 className="text-2xl text-[#130f40] font-bold mb-4">Surgery</h1>
                        <p className="text-[#525252] mb-6">We provide a range of high-quality medical services tailored to your needs.</p>
                        <button className="px-6 py-3 mt-4 text-[#12CBC4] bg-white border border-[#12CBC4] rounded-md hover:bg-[#12CBC4] hover:text-white transition-all duration-200">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white bg-opacity-70 p-10 rounded-lg text-center shadow-lg max-w-sm mx-auto">
                        <div className="mb-4">
                            <img className="w-24 mx-auto border-4 border-[#12CBC4] rounded-full p-2" src={servicescaerd2} alt="Service Icon" />
                        </div>
                        <h1 className="text-2xl text-[#130f40] font-bold mb-4">Diagnostics</h1>
                        <p className="text-[#525252] mb-6">We provide a range of high-quality medical services tailored to your needs.</p>
                        <button className="px-6 py-3 mt-4 text-[#12CBC4] bg-white border border-[#12CBC4] rounded-md hover:bg-[#12CBC4] hover:text-white transition-all duration-200">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white bg-opacity-70 p-10 rounded-lg text-center shadow-lg max-w-sm mx-auto">
                        <div className="mb-4">
                            <img className="w-24 mx-auto border-4 border-[#12CBC4] rounded-full p-2" src={servicescaerd3} alt="Service Icon" />
                        </div>
                        <h1 className="text-2xl text-[#130f40] font-bold mb-4">Vaccine</h1>
                        <p className="text-gray-700 mb-6">We provide a range of high-quality medical services tailored to your needs.</p>
                        <button className="px-6 py-3 mt-4 text-[#12CBC4] bg-white border border-[#12CBC4] rounded-md hover:bg-[#12CBC4] hover:text-white transition-all duration-200">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white bg-opacity-70 p-10 rounded-lg text-center shadow-lg max-w-sm mx-auto">
                        <div className="mb-4">
                            <img className="w-24 mx-auto border-4 border-[#12CBC4] rounded-full p-2" src={servicescaerd4} alt="Service Icon" />
                        </div>
                        <h1 className="text-2xl text-[#130f40] font-bold mb-4">Medicine</h1>
                        <p className="text-[#525252] mb-6">We provide a range of high-quality medical services tailored to your needs.</p>
                        <button className="px-6 py-3 mt-4 text-[#12CBC4] bg-white border border-[#12CBC4] rounded-md hover:bg-[#12CBC4] hover:text-white transition-all duration-200">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white bg-opacity-70 p-10 rounded-lg text-center shadow-lg max-w-sm mx-auto">
                        <div className="mb-4">
                            <img className="w-24 mx-auto border-4 border-[#12CBC4] rounded-full p-2" src={servicescaerd5} alt="Service Icon" />
                        </div>
                        <h1 className="text-2xl text-[#130f40] font-bold mb-4">Liver Transport</h1>
                        <p className="text-[#525252] mb-6">We provide a range of high-quality medical services tailored to your needs.</p>
                        <button className="px-6 py-3 mt-4 text-[#12CBC4] bg-white border border-[#12CBC4] rounded-md hover:bg-[#12CBC4] hover:text-white transition-all duration-200">
                            Learn More
                        </button>
                    </div>
                    <div className="bg-white bg-opacity-70 p-10 rounded-lg text-center shadow-lg max-w-sm mx-auto">
                        <div className="mb-4">
                            <img className="w-24 mx-auto border-4 border-[#12CBC4] rounded-full p-2" src={servicescaerd6} alt="Service Icon" />
                        </div>
                        <h1 className="text-2xl text-[#130f40] font-bold mb-4">Orthopedic</h1>
                        <p className="text-[#525252] mb-6">We provide a range of high-quality medical services tailored to your needs.</p>
                        <button className="px-6 py-3 mt-4 text-[#12CBC4] bg-white border border-[#12CBC4] rounded-md hover:bg-[#12CBC4] hover:text-white transition-all duration-200">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
