import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
const DoctorCard = ({ image, name, specialty }) => {
    return (
        <div className=''>
            <div>
                <div className="relative  mx-auto  rounded-lg border">
                    <div className="group relative text-center">
                        <img className="w-full h-80 object-cover rounded-t-lg mb-10" src={image} alt="Dr. Emily Thompson" />
                        <div className='p-3'>
                            <h1 className="text-xl text-[#130f40] font-bold mb-2">{name}</h1>
                            <p className='text-[#12CBC4]'>{specialty}</p>
                        </div>
                        <div  className="absolute inset-0 bg-[#12CBC4] rounded-lg bg-opacity-75 opacity-0 group-hover:opacity-80 flex items-center justify-center transition-opacity duration-300">
                            <div className="text-center text-white">
                                <div className="flex justify-center mt-4">
                                    <a href="#" className="mx-2 text-2xl text-white hover:text-gray-300">
                                        <FaFacebookF />
                                    </a>
                                    <a href="#" className="mx-2 text-2xl text-white hover:text-gray-300">
                                        <FaTwitter />
                                    </a>
                                    <a href="#" className="mx-2 text-2xl text-white hover:text-gray-300">
                                        <FaLinkedinIn />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DoctorCard;