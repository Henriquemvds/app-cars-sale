import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const VehiclesContext = createContext()

export const VehiclesProvider = ({ children }) => {

    const [vehicles, setVehicles] = useState([])

    const getVehicles = () => {
        axios.get('https://api-cars-sale-blue.vercel.app/automoveis/')
            .then((response) => setVehicles(response.data))
    }

    useEffect(() => {
        getVehicles()
    }, [])

    return (
        <VehiclesContext.Provider value={{ vehicles, getVehicles }}>
            {children}
        </VehiclesContext.Provider>
    )
}