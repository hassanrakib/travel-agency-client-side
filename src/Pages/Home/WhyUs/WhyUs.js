import React from 'react';

const WhyUs = () => {
    return (
        <div className='bg-why-us bg-cover bg-center'>
            <div class="grid gap-10 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto py-8">
                <div class="grid gap-4 grid-cols-1 md:grid-cols-2 text-center">
                    <div className='rounded-lg p-5 bg-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <h3 className='text-2xl font-bold my-5'>Experienced Travel Agent</h3>
                        <p>Nec dictum finibus senectus amet nibh posuere massa</p>
                    </div>
                    <div className='rounded-lg p-5 bg-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <h3 className='text-2xl font-bold my-5'>Experienced Travel Agent</h3>
                        <p>Nec dictum finibus senectus amet nibh posuere massa</p>
                    </div>
                    <div className='rounded-lg p-5 bg-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <h3 className='text-2xl font-bold my-5'>Experienced Travel Agent</h3>
                        <p>Nec dictum finibus senectus amet nibh posuere massa</p>
                    </div>
                    <div className='rounded-lg p-5 bg-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                        </svg>
                        <h3 className='text-2xl font-bold my-5'>Experienced Travel Agent</h3>
                        <p>Nec dictum finibus senectus amet nibh posuere massa</p>
                    </div>
                </div>
                <div style={{ backgroundColor: 'rgba(255, 255, 255, .3)'}} className='py-20 sm:pl-12 sm:pr-40 px-2 backdrop-blur-3xl rounded-lg text-white'>
                    <h5 className='text-xl font-bold'>WHY CHOOSE US</h5>
                    <h2 className='text-4xl md:text-5xl font-bold my-5'>With age, comes wisdom. With travel, comes understanding.</h2>
                    <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <button className='text-white bg-red-400 px-8 py-3 rounded-lg text-base font-bold'>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;