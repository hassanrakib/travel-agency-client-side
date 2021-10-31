import React from 'react';
import useTourPackages from '../../../hooks/useTourPackages';
import TourPackage from '../TourPackage/TourPackage';

const TourPackages = () => {
    const {tourPackages} = useTourPackages();
    return (
        <div className="max-w-6xl mx-auto my-5 text-center">
            <p className='mt-5'><b className='text-red-400 text-base'>FEATURED</b></p>
            <h2 className='font-bold text-4xl mb-2'>Popular Tour Packages</h2>
            <div className='md:grid gap-8 grid-cols-3'>
                {
                    tourPackages.map(tourPackage => <TourPackage tourPackage={tourPackage} key={tourPackage._id} />)
                }
            </div>
        </div>
    );
};

export default TourPackages;