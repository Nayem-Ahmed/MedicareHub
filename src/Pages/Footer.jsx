import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';  // Adjust the path to your logo

const Footer = () => {
    return (
        <footer className="bg-[#001430]  text-white py-8">
            <div className='py-10'>

                <div className="md:px-8 px-4 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div>
                        <img src={logo} alt="Medical Logo" className="w-32 mb-4" />
                        <p className="text-sm">
                            Providing high-quality medical care with a focus on patient satisfaction and wellbeing.
                        </p>
                        <div className="flex mt-4   gap-5 ">
                            <a href="#" className="text-white hover:text-gray-300">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                <FaLinkedinIn size={24} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                        <p>123 Medical St, Health City</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@medicalwebsite.com</p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                        <ul>
                            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Services</a></li>
                            <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Newsletter</h2>
                        <p className="mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <form>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2 mb-2 rounded text-teal-700"
                            />
                            <button
                                type="submit"
                                className="w-full p-2 rounded bg-[#f39c12] text-white hover:bg-[#12CBC4] transition"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Social Media Links and Copyright */}
            <div className="mt-8 border-t border-gray-500 pt-6 text-center">

                <p className="text-sm">&copy; 2024 Medical Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
