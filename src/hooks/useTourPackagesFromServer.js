import { useEffect, useState } from "react";

const useTourPackagesFromServer = () => {
    const [tourPackages, setTourPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tour-packages')
            .then(res => res.json())
            .then(packages => setTourPackages(packages));
    }, []);

    return {tourPackages};
}

export default useTourPackagesFromServer;