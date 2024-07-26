import Lottie from 'lottie-react';
import React from 'react';
import animation from '../../public/appointment.json'

const Appointment = () => {
    return (
        <section className="bg-gray-100 md:px-8 px-5 py-10">
            <div className="  mx-auto ">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#130f40]">Book an Appointment</h2>
                    <p className="text-md text-[#525252] mt-4">
                        Schedule an appointment with our specialists today!
                    </p>
                </div>
                <div className='flex gap-5 flex-col md:flex-row'>

                    <div className="md:w-1/2 w-full mx-auto bg-white p-8   shadow-lg border-l-8 border-t-8  border-[#12CBC4]">
                        <form>
                            <div className="flex flex-wrap -mx-2 mb-4">
                                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                                    <input
                                        className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                                        type="text"
                                        id="name"
                                        placeholder="Your Name" />
                                </div>
                                <div className="w-full md:w-1/2 px-2">
                                    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                                    <input className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500" type="email" id="email" placeholder="Your Email" />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-2 mb-4">
                                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                                    <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
                                    <input className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500" type="tel" id="phone" placeholder="Your Phone Number" />
                                </div>
                                <div className="w-full md:w-1/2 px-2">
                                    <label className="block text-gray-700 mb-2" htmlFor="date">Date</label>
                                    <input className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500" type="date" id="date" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-2 mb-4">
                                <div className="w-full px-2">
                                    <label className="block text-gray-700 mb-2" htmlFor="department">Department</label>
                                    <select
                                        className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
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
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                                <textarea
                                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
                                    id="message"
                                    rows="4"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button type='submit' className="lg:px-4 px-2 shadow-2xl shadow-slate-900 md:py-2 py-1 border-b-4 bg-[#f39c12] font-semibold text-white border-teal-500 hover:bg-[#12CBC4] active:scale-95 transition-transform ">
                                    Book An Appointment
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className='md:w-1/2 w-full'>
                        <Lottie animationData={animation} loop={true} />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Appointment;
