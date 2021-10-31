import { useContext } from "react"
import { TourPackagesContext } from "../contexts/TourPackagesProvider"

const useTourPackages = () => {
    return useContext(TourPackagesContext);
}

export default useTourPackages;