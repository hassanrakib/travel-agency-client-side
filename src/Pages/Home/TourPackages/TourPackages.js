import React from 'react';

const TourPackages = () => {
    return (
        <div className="max-w-6xl mx-auto my-5 text-center">
            <p className='mt-5'><b className='text-red-400 text-base'>FEATURED</b></p>
            <h2 className='font-bold text-4xl mb-2'>Popular Tour Packages</h2>
            <div className='md:grid gap-8 grid-cols-3'>
                <div className='shadow-lg p-5'>
                    <div className='w-full'>
                        <img src="https://source.unsplash.com/random/1536x1022" alt="" />
                    </div>
                    <h2 className='text-2xl font-bold my-3'>Expedition Everest</h2>
                    <p className='my-3'>Eros cursus aptent sodales nunc metus sociosqu nam letius velit class mattis penatibus nascetur tempo</p>
                    <button className='bg-red-400 px-8 py-3 rounded-lg text-base font-bold flex mx-auto text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className='ml-2'>Book Now</span>
                    </button>
                </div>
                <div className='shadow-lg p-5'>
                    <div className='w-full'>
                        <img src="https://source.unsplash.com/random/1536x1022" alt="" />
                    </div>
                    <h2 className='text-2xl font-bold my-3'>Expedition Everest</h2>
                    <p className='my-3'>Eros cursus aptent sodales nunc metus sociosqu nam letius velit class mattis penatibus nascetur tempo</p>
                    <button className='bg-red-400 px-8 py-3 rounded-lg text-base font-bold flex mx-auto text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className='ml-2'>Book Now</span>
                    </button>
                </div>
                <div className='shadow-lg p-5'>
                    <div className='w-full'>
                        <img src="https://source.unsplash.com/random/1536x1022" alt="" />
                    </div>
                    <h2 className='text-2xl font-bold my-3'>Expedition Everest</h2>
                    <p className='my-3'>Eros cursus aptent sodales nunc metus sociosqu nam letius velit class mattis penatibus nascetur tempo</p>
                    <button className='bg-red-400 px-8 py-3 rounded-lg text-base font-bold flex mx-auto text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className='ml-2'>Book Now</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TourPackages;