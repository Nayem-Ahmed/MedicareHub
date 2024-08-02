import React from 'react';
import PageTopPages from '../../Components/PageTopPages';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import serdetails from '../../assets/serdetails.jpg'
// image import
import img1 from '../../assets/ser1.webp'
import img2 from '../../assets/ser2.jpg'
import img3 from '../../assets/ser3.jpg'
import img4 from '../../assets/ser4.jpg'
import img5 from '../../assets/ser5.jpg'
import img6 from '../../assets/ser6.jpg'

const ServicesDetails = () => {
    const services = useLoaderData();  // Load the array of services
    const { id } = useParams();  // Get the service ID from the URL
    console.log(services, id);
    const service = services.find(service => service.id == id);

    const imageMap = {
        'image1.png': img1,
        'image2.png': img2,
        'image3.png': img3,
        'image4.png': img4,
        'image5.png': img5,
        'image6.png': img6,
    }
    return (
        <div>
            <PageTopPages
                image={serdetails}
                title="Services Details"
                subtitle={<span><Link className='hover:text-[#f39c12]' to="/">Home </Link> /  Services Details</span>}
            />

            <div className='flex flex-col md:flex-row gap-5 md:px-8 px-5 py-5'>
                <div className='md:w-2/3'>
                    <div className=' '>
                        <h1 className='text-3xl font-bold mb-4 text-[#130f40]'>{service?.heading}</h1>
                        <h2 className='text-xl mb-4 text-[#525252]'>{service?.title}</h2>
                        <img src={imageMap[service?.image]} alt={service?.title} className='w-full h-96 object-cover rounded-lg mb-4' />
                        <p className='text-lg text-[#525252] leading-relaxed'>{service?.description}</p>
                    </div>

                    <div className='mt-10'>
                        <h3 className='text-2xl font-bold mb-4 text-[#130f40]'>Additional Information</h3>
                        <p className='text-md text-[#525252] mb-6'>
                            At our facility, we pride ourselves on offering the latest advancements in medical technology and treatment methods.
                            Our dedicated team of professionals is here to provide compassionate and comprehensive care to ensure the best possible outcomes for our patients.
                        </p>
                        <p className='text-md text-[#525252] mb-6'>
                            For more information about our services or to schedule an appointment, please contact us at (123) 456-7890 or visit our website.
                        </p>
                    </div>

                    <div className='mt-10'>
                        <h3 className='text-2xl font-bold mb-4 text-[#130f40]'>Why Choose Us?</h3>
                        <ul className='list-disc pl-5 text-[#525252]'>
                            <li className='mb-2'>Highly qualified and experienced medical professionals.</li>
                            <li className='mb-2'>State-of-the-art medical equipment and facilities.</li>
                            <li className='mb-2'>Personalized care tailored to each patient's needs.</li>
                            <li className='mb-2'>Comprehensive range of medical services.</li>
                            <li className='mb-2'>Commitment to patient safety and well-being.</li>
                        </ul>
                    </div>
                </div>

                <div className='md:w-1/3 bg-white shadow-lg rounded-lg p-6'>
                    <h1 className='text-3xl font-bold mb-5 text-[#130f40]'>Services List</h1>
                    <div className='flex flex-col space-y-4'>
                        {services?.map((service) => (
                            <Link key={service.id} to={`/servicesDetails/${service.id}`}>
                                <button className='w-full bg-[#12CBC4] text-white py-2 px-4 rounded-md hover:bg-[#10b0ac] transition-all font-semibold'>
                                    {service?.heading}
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;