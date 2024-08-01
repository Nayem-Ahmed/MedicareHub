import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import author from '../../assets/author.jpg';
import author2 from '../../assets/author2.webp';
import testimonialbg from '../../assets/testimonialbg.svg';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#f39c12" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#f39c12" }}
            onClick={onClick}
        />
    );
}


const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const testimonialsText = [
        {
            image: author,
            text: 'I had an amazing experience at the clinic. The staff was very friendly and the doctors were extremely professional. They took the time to understand my medical history and addressed all my concerns with patience and care. I highly recommend this clinic to anyone seeking top-notch medical services.',
            name: 'Sarah J.'
        },
        {
            image: author2,
            text: 'The care I received here was top-notch. I felt heard and understood by everyone I interacted with. The doctors were very knowledgeable and took the time to explain my condition and treatment options in detail. The nursing staff was also very attentive and compassionate. I will definitely return for any future medical needs.',
            name: 'Michael B.'
        },
        {
            image: author,
            text: 'Highly recommend this place for anyone seeking quality medical care. The environment is very welcoming and comforting. From the moment I walked in, I was greeted with smiles and professionalism. The waiting area is clean and comfortable. The team really goes above and beyond to ensure their patients are well taken care of.',
            name: 'Emily R.'
        }
    ];

    return (
        <div style={{ backgroundImage: `url(${testimonialbg})` }} className="py-8  mb-5">
            <div className='mx-auto text-center mb-8'>
                <p className='text-[#12CBC4] mb-4 font-semibold'>Testimonial</p>
                <h1 className='lg:text-3xl text-2xl text-[#130f40] font-bold mb-4'>
                    See What The Patients Saying <br></br> About Us
                </h1>
            </div>

            <div className='md:max-w-3xl  mx-auto  py-5 relative px-10'>
                <Slider {...settings}>
                    {testimonialsText?.map((testimonial, index) => (
                        <div key={index} className="p-6 bg-white bg-opacity-70 ">
                            <img className="w-32 h-32 object-cover rounded-full " src={testimonial.image} alt={testimonial.name} />
                            <div className="mb-5">
                                <i className="text-[#525252]"><span className="text-xl"><FaQuoteLeft /></span>{testimonial.text}</i>
                            </div>
                            <p className="font-bold text-2xl text-[#130f40]">{testimonial.name}</p>
                            <p className="text-sm text-[#12CBC4] ">Patient</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;

