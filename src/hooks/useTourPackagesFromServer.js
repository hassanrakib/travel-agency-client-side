import { useEffect, useState } from "react";

const useTourPackagesFromServer = () => {
    const [tourPackages, setTourPackages] = useState([]);
    useEffect(() => {
        fetch('https://shocking-goosebumps-52929.herokuapp.com/tour-packages')
            .then(res => res.json())
            .then(packages => setTourPackages(packages));
    }, []);

    return {tourPackages};
}

export default useTourPackagesFromServer;