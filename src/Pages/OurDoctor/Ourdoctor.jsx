// import React from 'react';
// import d1 from '../../assets/D1.webp'
// import d2 from '../../assets/D2.avif'
// import d3 from '../../assets/D3.jpg'
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';


// const Ourdoctor = () => {
//     return (
//         <div className='px-8'>
//             <div className='py-10'>

//                 <div className='max-w-xl mx-auto text-center mb-12'>
//                     <p className='text-[#12CBC4] mb-4 font-semibold'>Our Doctors</p>
//                     <h1 className='lg:text-3xl text-2xl text-[#130f40] font-bold mb-4'>Meet Our Doctors</h1>
//                     <p className="text-md text-[#525252] mb-6">
//                         We recognize that each patient is unique, and we are committed to providing personalized services to meet your specific health needs.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//                     <div className="relative  mx-auto  rounded-lg border">
//                         <div className="group relative text-center">
//                             <img className="w-full object-cover rounded-t-lg mb-14" src={d1} alt="Dr. Emily Thompson" />
//                             <div className='p-3'>
//                                 <h1 className="text-xl text-[#130f40] font-bold mb-2">Dr. Emily Thompson</h1>
//                                 <p className='text-[#12CBC4]'>Cardiologist</p>
//                             </div>

//                             <div className="absolute inset-0 bg-[#12CBC4] rounded-lg bg-opacity-75 opacity-0 group-hover:opacity-80 flex items-center justify-center transition-opacity duration-300">
//                                 <div className="text-center text-white">

//                                     <div className="flex justify-center mt-4">
//                                         <a href="#" className="mx-2 text-white hover:text-gray-300">
//                                             <FaFacebookF />
//                                         </a>
//                                         <a href="#" className="mx-2 text-white hover:text-gray-300">
//                                             <FaTwitter />
//                                         </a>
//                                         <a href="#" className="mx-2 text-white hover:text-gray-300">
//                                             <FaLinkedinIn />
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>



//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Ourdoctor;

import React, { useEffect } from 'react';
import d1 from '../../assets/D1.webp'
import d2 from '../../assets/D4.jpg'
import d3 from '../../assets/D3.jpg'
import DoctorCard from '../../Components/DoctorCard/DoctorCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const doctors = [
    {
        image: d1,
        name: 'Dr. Emily Thompson',
        specialty: 'Cardiologist',
    },
    {
        image: d2,
        name: 'Dr. Michael Williams',
        specialty: 'Orthopedic Surgeon',
    },
    {
        image: d3,
        name: 'Dr. Sarah Patel',
        specialty: 'Pediatrician',
    },
];

const Ourdoctor = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, [])
    return (
        <div className='md:px-8 px-5 my-10'>
            <div className='max-w-xl mx-auto text-center mb-12'>
                <p className='text-[#12CBC4] mb-4 font-semibold'>Our Doctors</p>
                <h1 className='lg:text-3xl text-2xl text-[#130f40] font-bold mb-4'>Meet Our Doctors</h1>
                <p className="text-md text-[#525252] mb-6">
                    We recognize that each patient is unique, and we are committed to providing personalized services to meet your specific health needs.
                </p>
            </div>
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {doctors.map((doctor, index) => (
                    <DoctorCard key={index} image={doctor.image} name={doctor.name} specialty={doctor.specialty} />
                ))}
            </div>
        </div>

    );
};

export default Ourdoctor;