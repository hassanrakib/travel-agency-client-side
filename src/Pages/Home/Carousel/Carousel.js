import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import Slider from "react-slick";
import './Carousel.css';

const Carousel = () => {
    const settings = {
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
    };
    return (
        <Slider {...settings} className='text-white'>
            <div className='bg-carousel-img-1 md:h-screen bg-center bg-cover slide justify-center items-center space-x-10'>
                <div className='md:flex max-w-6xl mt-12 py-7 px-2 sm:p-7'>
                    <div className='md:flex-1 mb-6'>
                        <h4 className='text-2xl mb-5'>Climbing Mountain</h4>
                        <h1 className='text-5xl sm:text-6xl mb-5 font-bold'>Amazing Place for Adventure</h1>
                        <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse facere, doloremque itaque maiores ab vero dignissimos, atque nam sint aspernatur? Repudiandae facere sed aut.</p>
                        <button className='bg-red-400 px-8 py-4 rounded-lg text-xl font-bold'>Discover More</button>
                    </div>
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, .3)'}} className='py-20 sm:pl-12 sm:pr-40 px-10 backdrop-blur-3xl rounded-lg'>
                        <div className='flex items-center mb-8'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 rounded-full text-red-400 bg-white p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div className='ml-5'>
                                <p className='font-bold text-lg'>Location</p>
                                <p className='font-light'>Switzerland</p>
                            </div>
                        </div>
                        <div className='flex items-center mb-8'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 rounded-full text-red-400 bg-white p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className='ml-5'>
                                <p className='font-bold text-lg'>Durations</p>
                                <p className='font-light'>4 Days</p>
                            </div>
                        </div>
                        <div className='flex items-center mb-8'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 rounded-full text-red-400 bg-white p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <div className='ml-5'>
                                <p className='font-bold text-lg'>Max People</p>
                                <p className='font-light'>2 People</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className='bg-carousel-img-2 h-screen bg-center bg-cover'>
                <h4>Climbing Mountain</h4>
                <h1>Amazing Place for Adventure</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse facere, doloremque itaque maiores ab vero dignissimos, atque nam sint aspernatur? Repudiandae facere sed aut.</p>
                <button>Discover More</button>
            </div> */}
        </Slider>
    );
};

export default Carousel;