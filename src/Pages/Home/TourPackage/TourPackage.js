import React from 'react';
import { useHistory } from 'react-router';

const TourPackage = ({tourPackage}) => {
    const {_id, title, img, description, } = tourPackage;
    const history = useHistory();
    return (
        <div className='shadow-lg p-5'>
            <div className='w-full'>
                <img src={img} alt="" />
            </div>
            <h2 className='text-2xl font-bold my-3'>{title}</h2>
            <p className='my-3'>{description.substring(0, 200)}...</p>
            <button className='bg-red-400 px-8 py-3 rounded-lg text-base font-bold flex mx-auto text-white' onClick={() => history.push(`/place-order/${_id}`)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className='ml-2'>Book Now</span>
            </button>
        </div>
    );
};

export default TourPackage;