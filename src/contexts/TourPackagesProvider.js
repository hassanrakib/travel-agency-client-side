import React, { createContext } from 'react';
import useTourPackagesFromServer from '../hooks/useTourPackagesFromServer';

export const TourPackagesContext = createContext();

const TourPackagesProvider = ({children}) => {
    const tourPackages = useTourPackagesFromServer();
    return (
        <TourPackagesContext.Provider value={tourPackages}>
            {children}
        </TourPackagesContext.Provider>
    );
};

export default TourPackagesProvider;