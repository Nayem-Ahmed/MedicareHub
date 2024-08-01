
import React from 'react';
import { Parallax } from 'react-parallax';

const PageTopPages = ({ image, title, subtitle }) => {
    return (
        <Parallax bgImage={image} strength={300}>
            <div className="relative w-full h-[80vh] bg-cover bg-center">
                <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-4xl font-bold mb-3">{title}</h1>
                    <h2 className="">{subtitle}</h2>
                </div>
            </div>
        </Parallax>
    );
};

export default PageTopPages;
