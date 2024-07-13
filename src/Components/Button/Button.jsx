import React from 'react';

function Button({ children }) {
    return (
        <button className="lg:px-4 px-2 md:py-2 py-1 border-b-4 mr-7 border-[#12CBC4] font-semibold text-white bg-transparent border hover:bg-[#12CBC4] active:scale-95 transition-transform ">
            {children}
        </button>
    );
}

export default Button;
