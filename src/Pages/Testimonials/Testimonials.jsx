// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import gridimage from '../../assets/testi.jpg';
// import gridimage1 from '../../assets/grid1.jpg';
// import gridimag from '../../assets/grid3.jpg';
// import gridimage5 from '../../assets/grid5.jpg';
// import gridimage2 from '../../assets/D2.avif';
// import { FaQuoteLeft } from "react-icons/fa";
// import { BiSolidQuoteRight } from "react-icons/bi";



// const Testimonials = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     };

//     const testimonialsText = [
//         {
//             text: 'I had an amazing experience at the clinic. The staff was very friendly and the doctors were extremely professional. They took the time to understand my medical history and addressed all my concerns with patience and care.I highly recommend this clinic to anyone seeking top-notch medical services.',
//             name: 'Sarah J.'
//         },
//         {
//             text: 'The care I received here was top-notch. I felt heard and understood by everyone I interacted with. The doctors were very knowledgeable and took the time to explain my condition and treatment options in detail. The nursing staff was also very attentive and compassionate.I will definitely return for any future medical needs.',
//             name: 'Michael B.'
//         },
//         {
//             text: 'Highly recommend this place for anyone seeking quality medical care. The environment is very welcoming and comforting. From the moment I walked in, I was greeted with smiles and professionalism. The waiting area is clean and comfortable.The team really goes above and beyond to ensure their patients are well taken care of.',
//             name: 'Emily R.'
//         }
//     ];

//     return (
//         <div className=" py-12 md:px-8 px-4 ">
//             <div className='mx-auto text-center mb-12'>
//                 <p className='text-[#12CBC4] mb-4 font-semibold'>Testimonial</p>
//                 <h1 className='lg:text-3xl text-2xl text-[#130f40] font-bold mb-4'>
//                     See What The Patients Saying <br></br> About Us
//                 </h1>
//             </div>

//             <div className="flex flex-col md:flex-row items-center gap-5 mx-auto  ">
//                 <div className="w-full md:w-1/2">
//                     <div class="grid grid-cols-3 gap-2  ">
//                         <div class="col-span-2 border ">
//                             <img src={gridimage} alt="Books" class="w-full h-full object-cover rounded-tl-lg" />

//                         </div>
//                         <div class="col-span-1">
//                             <img src={gridimage2} alt="Bed" class="w-full h-full object-cover rounded-tr-lg" />

//                         </div>
//                         <div class=" ">
//                             <img src={gridimage1} alt="Sink" class="w-full h-full object-cover rounded-bl-lg" />

//                         </div>
//                         <div class=" ">
//                             <img src={gridimag} alt="Kitchen" class="w-full h-full object-cover " />

//                         </div>
//                         <div class=" ">
//                             <img src={gridimage5} alt="Kitchen" class="w-full h-full object-cover rounded-br-lg" />

//                         </div>
//                     </div>
//                 </div>
//                 <div className='w-full md:w-1/2 p-8 bg-[#f39c12] text-white'>
//                     <Slider className="" {...settings}>
//                         {testimonialsText.map((testimonial, index) => (
//                             <div key={index} className="p-8">
//                                 <div className=" ">
//                                     <p className="mb-4 fl"><span className="text-xl relative  "><FaQuoteLeft></FaQuoteLeft></span>{testimonial.text}</p>
//                                     <p className="font-bold text-2xl">{testimonial.name}</p>
//                                     <p>Patient</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Testimonials;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import author from '../../assets/author.jpg';
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
            image: author,
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
        <div style={{ backgroundImage: `url(${testimonialbg})` }} className="py-8 md:px-8 px-4 mb-5">
            <div className='mx-auto text-center mb-10'>
                <p className='text-[#12CBC4] mb-4 font-semibold'>Testimonial</p>
                <h1 className='lg:text-3xl text-2xl text-[#130f40] font-bold mb-4'>
                    See What The Patients Saying <br></br> About Us
                </h1>
            </div>

            <div className='max-w-screen-md mx-auto px-10 py-6 bg-white bg-opacity-70  relative shadow-xl shadow-[0 4px 8px rgba(0, 0, 0, 0.5)]'>
                <Slider {...settings}>
                    {testimonialsText.map((testimonial, index) => (
                        <div key={index} className=" px-10">
                            <img className="w-32 h-32 object-cover rounded-full " src={testimonial.image} alt={testimonial.name} />
                            <div className="mt-5">
                                <p className="mb-4"><span className="text-xl"><FaQuoteLeft /></span>{testimonial.text}</p>
                                <p className="font-bold text-2xl">{testimonial.name}</p>
                                <p className="text-sm">Patient</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;

