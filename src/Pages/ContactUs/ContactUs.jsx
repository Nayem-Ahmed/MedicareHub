import React from 'react';
import contact from '../../assets/contactUs.webp'
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import { TfiEmail } from "react-icons/tfi";


const ContactUs = () => {
    return (
        <div>
            <section className="md:px-8 px-5 py-10">
                <div className='flex flex-col md:flex-row-reverse md:h-[500px] h-auto'>
                    <div className="md:w-1/2 w-full mx-auto  p-8 bg-white flex items-center">
                        <form className="w-full">
                            <h1 className='text-2xl font-bold mb-4 text-[#130f40]'>Contact with us</h1>
                            <div className="flex-wrap -mx-2 mb-4">
                                <div className="w-full px-2 mb-5 ">
                                    <input
                                        className="w-full px-3 py-3 bg-teal-50 rounded-md focus:outline-none focus:border-teal-500"
                                        type="text"
                                        id="name"
                                        placeholder="Your Name" />
                                </div>
                                <div className="w-full px-2 mb-5">
                                    <input className="w-full px-3 py-3 bg-teal-50  rounded-md focus:outline-none focus:border-teal-500" type="email" id="email" placeholder="Your Email" />
                                </div>
                            </div>

                            <div className=" flex-wrap -mx-2 mb-4">
                                <div className="w-full   px-2 mb-5 ">
                                    <input className="w-full px-3 py-3 bg-teal-50  rounded-md focus:outline-none focus:border-teal-500" type="tel" id="phone" placeholder="Your Phone Number" />
                                </div>
                            </div>
                            <div className=" flex-wrap -mx-2 mb-5">
                                <div className="w-full px-2">
                                    <select
                                        className="w-full px-3 py-3 bg-teal-50  rounded-md focus:outline-none focus:border-teal-500"
                                        id="department"
                                    >
                                        <option value="">Select Department</option>
                                        <option value="Cardiology">Cardiology</option>
                                        <option value="Neurology">Neurology</option>
                                        <option value="Orthopedics">Orthopedics</option>
                                        <option value="Pediatrics">Pediatrics</option>
                                        <option value="Dermatology">Dermatology</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-5">
                                <textarea
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                                    id="message"
                                    rows="4"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button type='submit' className="shadow-2xl w-full shadow-slate-900 md:py-2 py-1 border-b-4 bg-[#f39c12] font-semibold text-white border-teal-500 hover:bg-[#12CBC4] active:scale-95 transition-transform ">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className='relative md:w-1/2 w-full '>
                        <img className=' object-cover w-full h-full' src={contact} alt="" />
                        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
                        <div className="absolute top-0 flex flex-col   justify-center text-white">
                            <div className='flex items-center gap-5 p-5'>
                                <span className='text-3xl rounded-md p-4 bg-[#12CBC4] '><FaLocationArrow></FaLocationArrow></span>
                                <div>
                                    <h1 className='font-bold text-xl mb-1'>Our Address</h1>
                                    <p className='text-sm'>PSD Building, 2 AlBahr St, Loskia <br></br> sripur, jamukara.</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-5 p-5'>
                                <span className='text-3xl rounded-md p-4 bg-[#12CBC4] '><TfiEmail></TfiEmail></span>
                                <div>
                                    <h1 className='font-bold text-xl mb-1'>Our Email</h1>
                                    <p className='text-sm'>contact@medicare.com</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-5 p-5'>
                                <span className='text-3xl rounded-md p-4 bg-[#12CBC4] '><FaPhoneAlt></FaPhoneAlt></span>
                                <div>
                                    <h1 className='font-bold text-xl mb-1'>Our Phone</h1>
                                    <p className='text-sm'>+1 800 123 45 67</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;