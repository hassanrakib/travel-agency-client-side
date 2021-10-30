import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-700 py-12 text-white'>
            <div className='px-2 max-w-6xl mx-auto grid gap-4 grid-cols-1 md:grid-cols-3'>
                <div>
                    <p className='my-8'>The Best Adventure Travel Agent & Tourism. We are proud to present the best destination place in the world.</p>
                    <div className='flex'>
                        <a className='mr-5' href="https://icons8.com/icon/118468/facebook"><img src="https://img.icons8.com/ios/50/ffffff/facebook-new.png" alt="" /></a>
                        <a className='mr-5' href="https://icons8.com/icon/118468/facebook"><img src="https://img.icons8.com/ios/50/ffffff/twitter.png" alt='' /></a>
                        <a href="https://icons8.com/icon/118468/facebook"><img src="https://img.icons8.com/ios/50/ffffff/youtube-play.png" alt="" /></a>
                    </div>
                </div>
                <div>
                    <h5 className='border-b-2 border-red-500 pb-5 font-bold text-base'>INFORMATION</h5>
                    <div className='mt-3 inline-flex flex-col space-y-2'>
                        <a href="/">About Us</a>
                        <a href="/">Carrers</a>
                        <a href="/">Contact</a>
                        <a href="/">Privacy Policy</a>
                        <a href="/">Terms of Service</a>
                        <a href="/">Cookie Policy</a>
                    </div>
                </div>
                <div>
                    <h5 className='border-b-2 border-red-500 pb-5 font-bold text-base'>OUR OFFICE</h5>
                    <div className='flex my-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className='ml-2'>Jl Cempaka Wangi No 22 - Jakarta, ID</p>
                    </div>
                    <div className='flex mb-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                        </svg>
                        <p className='ml-2'>+123.2323.4000</p>
                    </div>
                    <div className='flex mb-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <p className='ml-2'>support@admin.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;