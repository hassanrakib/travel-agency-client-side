import React from 'react';

const About = () => {
    return (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto my-20 px-2">
            <div>
                <p className='text-red-400 font-bold'>ABOUT AVONTUR TRAVEL</p>
                <h2 className='text-4xl font-bold my-5'>We Provide The Best Experience for You to Explore Nature.</h2>
                <p className='mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <button className='text-white bg-red-400 px-8 py-3 rounded-lg text-base font-bold'>Learn More</button>
            </div>
            <div className='relative mt-5 md:mt-0'>
                <div className='md:absolute md:w-5/6 md:h-3/4'>
                    <img className='w-full h-full object-cover rounded-lg' src="https://source.unsplash.com/random/600x400" alt="" />
                </div>
                <div className='md:absolute md:top-1/3 md:left-1/3 mt-5 md:mt-0'>
                    <img className='w-full h-full object-cover rounded-lg filter drop-shadow-2xl' src="https://source.unsplash.com/random/600x330" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;