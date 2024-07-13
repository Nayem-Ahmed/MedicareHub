import React from 'react';
import banner from '../../assets/Virus.svg';
import bannerPerson from '../../assets/banner.png';

const Banner = () => {
    return (
        <div className="relative  my-6 bg-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-5 h-full overflow-hidden">
                <div className=" max-w-2xl mb-6 md:mb-0">
                    <h1 className="lg:text-5xl md:text-3xl text-[#001430] font-bold mb-4">Safeguarding Health</h1>
                    <h1 className="lg:text-5xl md:text-3xl text-[#001430] font-bold mb-4">with Vaccination</h1>
                    <h1 className="lg:text-5xl md:text-3xl text-[#001430] font-bold mb-4">Programs</h1>
                    <p className="text-lg text-[#525252] mb-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit eaque dignissimos officiis repellendus optio mollitia magni quam dolorum praesentium enim.</p>
                    <button className="lg:px-4 px-2 shadow-2xl shadow-slate-900 md:py-2 py-1 border-b-4  bg-[#f39c12]  font-semibold  text-white border-teal-500 hover:bg-[#12CBC4] active:scale-95 transition-transform ">
                        Book An Apoinment
                    </button>
                </div>
                <div className="w-full md:w-auto flex-shrink-0">
                    <img src={bannerPerson} alt="Banner Person" className="w-full md:w-80 h-auto object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
