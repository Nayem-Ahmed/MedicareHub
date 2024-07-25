import React from 'react';
import About from '../Pages/About';

const PageTopPages = ({ image, title, subtitle }) => {
    return (
        <div>
            <div className="relative w-full h-[60vh]">
                <img
                    className='w-full h-full object-cover'
                    src={image}
                    alt=""
                />
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-bold mb-3">{title}</h1>
                    <h2 className="">{subtitle}</h2>
                </div>
            </div>
            <About></About>
        </div>
    );
};

export default PageTopPages;
